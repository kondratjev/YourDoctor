import React, {
  useMemo,
  useCallback,
  useState,
  useEffect,
  useRef,
} from "react";
import {
  Dimensions,
  FlatList,
  NativeScrollEvent,
  NativeSyntheticEvent,
} from "react-native";
import {
  addDays,
  eachDayOfInterval,
  format,
  isSameDay,
  startOfWeek,
} from "date-fns";
import { ru } from "date-fns/locale";

import {
  Container,
  Item,
  Day,
  DayShortName,
  DayNumberWrapper,
  DayNumber,
  CurrentDate,
} from "./CalendarStrip.style";

type Props = {
  stripRef: React.RefObject<FlatList<any>>;
  start: Date;
  end: Date;
  selectedDate?: Date;
  onSelectDate: (date: Date) => void;
  onScrollEnd: (direction: "left" | "right", offset: number) => void;
};

const CalendarStrip = (props: Props) => {
  const { start, end, selectedDate, onSelectDate, onScrollEnd } = props;

  const stripRef = useRef<FlatList>(null);

  const [offset, setOffset] = useState(0);
  const [currentIndex, setCurrentIndex] = useState(-1);

  const shortWeekDays = useMemo(() => {
    const firstDOW = startOfWeek(new Date());
    return Array(7)
      .fill(null)
      .map((_, i) => format(addDays(firstDOW, i), "EEEEEE", { locale: ru }));
  }, []);

  const weeks = useMemo(() => {
    let startDate = startOfWeek(start, { locale: ru });
    const endDate = startOfWeek(end, { locale: ru });
    const days = [];
    while (startDate <= endDate) {
      days.push(
        eachDayOfInterval({
          start: startDate,
          end: addDays(startDate, 6),
        }),
      );
      startDate = addDays(startDate, 7);
    }
    return days;
  }, [end, start]);

  const initialScrollIndex = useMemo(() => {
    if (selectedDate) {
      return weeks.findIndex((item) => {
        return item.some((subitem) => isSameDay(subitem, selectedDate));
      });
    } else {
      return 0;
    }
  }, [selectedDate, weeks]);

  const onPress = useCallback(
    (date: Date) => () => {
      onSelectDate(date);
    },
    [onSelectDate],
  );

  const renderItem = useCallback(
    ({ item }: { item: Date[] }) => {
      return (
        <Item>
          {item.map((date) => {
            const isSelected = !!selectedDate && isSameDay(date, selectedDate);
            return (
              <Day key={date.toISOString()} onPress={onPress(date)}>
                <DayShortName>{shortWeekDays[date.getDay()]}</DayShortName>
                <DayNumberWrapper isSelected={isSelected}>
                  <DayNumber isSelected={isSelected}>
                    {date.getDate()}
                  </DayNumber>
                </DayNumberWrapper>
              </Day>
            );
          })}
        </Item>
      );
    },
    [onPress, selectedDate, shortWeekDays],
  );

  const WIDTH = Dimensions.get("window").width;

  useEffect(() => {
    setOffset(WIDTH * initialScrollIndex);
  }, [WIDTH, initialScrollIndex]);

  const getItemLayout = useCallback(
    (_, index: number) => ({
      length: WIDTH,
      offset: WIDTH * index,
      index,
    }),
    [WIDTH],
  );

  const onMomentumScrollEnd = useCallback(
    (event: NativeSyntheticEvent<NativeScrollEvent>) => {
      const currentOffset = event.nativeEvent.contentOffset.x;
      const diff = currentOffset - offset;
      const direction = diff > 0 ? "right" : "left";
      const index = Math.round(Math.abs(diff / WIDTH));
      onScrollEnd(direction, index);
      setOffset(currentOffset);
    },
    [WIDTH, offset, onScrollEnd],
  );

  useEffect(() => {
    if (selectedDate) {
      const index = weeks.findIndex((item) => {
        return item.some((subitem) => isSameDay(subitem, selectedDate));
      });
      if (currentIndex !== index) {
        stripRef.current?.scrollToIndex({ index });
        setCurrentIndex(index);
      }
    }
  }, [currentIndex, selectedDate, weeks]);

  return (
    <Container>
      <FlatList
        ref={stripRef}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        initialScrollIndex={initialScrollIndex}
        decelerationRate="fast"
        data={weeks}
        extraData={selectedDate}
        keyExtractor={(_, index) => `${index}`}
        renderItem={renderItem}
        getItemLayout={getItemLayout}
        onMomentumScrollEnd={onMomentumScrollEnd}
      />
      <CurrentDate>
        {selectedDate && format(selectedDate, "d MMMM", { locale: ru })}
      </CurrentDate>
    </Container>
  );
};

export default CalendarStrip;
