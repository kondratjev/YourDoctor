import {
  addDays,
  addWeeks,
  eachDayOfInterval,
  format,
  isSameDay,
  startOfWeek,
  subWeeks,
} from "date-fns";
import React, {
  RefObject,
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import {
  Dimensions,
  FlatList,
  NativeScrollEvent,
  NativeSyntheticEvent,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import styles from "./CalendarStrip.styles";

type Props = {
  stripRef: RefObject<FlatList<any>>;
  start: Date;
  end: Date;
  selectedDate: Date;
  onDateChange: (date: Date) => void;
  onWeekChange: (date: Date) => void;
};

const CalendarStrip = (props: Props) => {
  const { start, end, selectedDate, onDateChange, onWeekChange } = props;

  const stripRef = useRef<FlatList>(null);

  const [offset, setOffset] = useState(0);
  const [currentIndex, setCurrentIndex] = useState(-1);

  const shortWeekDays = useMemo(() => {
    const firstDOW = startOfWeek(new Date());
    return Array(7)
      .fill(null)
      .map((_, i) => format(addDays(firstDOW, i), "EEEEEE"));
  }, []);

  const weeks = useMemo(() => {
    let startDate = startOfWeek(start);
    const endDate = startOfWeek(end);
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
    return weeks.findIndex((item) => {
      return item.some((subitem) => isSameDay(subitem, selectedDate));
    });
  }, [selectedDate, weeks]);

  const onPress = useCallback(
    (date: Date) => () => {
      onDateChange(date);
    },
    [onDateChange],
  );

  const renderItem = useCallback(
    ({ item }: { item: Date[] }) => {
      return (
        <View style={styles.item}>
          {item.map((date) => {
            const isSelected = !!selectedDate && isSameDay(date, selectedDate);
            return (
              <TouchableOpacity
                key={date.toISOString()}
                style={styles.day}
                onPress={onPress(date)}>
                <Text style={styles.dayShortName}>
                  {shortWeekDays[date.getDay()]}
                </Text>
                <View
                  style={
                    isSelected
                      ? [
                          styles.dayNumberWrapper,
                          styles.dayNumberWrapperSelected,
                        ]
                      : styles.dayNumberWrapper
                  }>
                  <Text
                    style={
                      isSelected
                        ? [styles.dayNumber, styles.dayNumberSelected]
                        : styles.dayNumber
                    }>
                    {date.getDate()}
                  </Text>
                </View>
              </TouchableOpacity>
            );
          })}
        </View>
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
      const count = Math.round(Math.abs(diff / WIDTH));
      if (diff > 0) {
        onWeekChange(addWeeks(selectedDate, count));
      } else {
        onWeekChange(subWeeks(selectedDate, count));
      }
      setOffset(currentOffset);
    },
    [WIDTH, offset, onWeekChange, selectedDate],
  );

  useEffect(() => {
    if (selectedDate) {
      const index = weeks.findIndex((item) => {
        return item.some((subitem) => isSameDay(subitem, selectedDate));
      });
      if (currentIndex !== index) {
        stripRef.current?.scrollToIndex({ index, animated: false });
        setCurrentIndex(index);
      }
    }
  }, [currentIndex, selectedDate, weeks]);

  return (
    <View style={styles.container}>
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
        scrollEventThrottle={16}
        initialNumToRender={7}
        onMomentumScrollEnd={onMomentumScrollEnd}
      />
    </View>
  );
};

export default CalendarStrip;
