import React, { Fragment, useCallback, useMemo, useRef, useState } from "react";
import { Dimensions, FlatList, ScrollView } from "react-native";
import { isSameDay, subMonths, addMonths, addWeeks, subWeeks } from "date-fns";

import CategoryTitle from "../../components/CategoryTitle";
import CalendarMedicine from "../../components/Medicine";
import Tile from "../../components/Tile";
import Capsule from "../../components/Icons/Pills/Capsule";

import CalendarStrip from "./CalendarStrip";
import Details from "./Details";

import { MEDICINE } from "../../theme/palette";
import { week } from "../../__mock__/calendar";

import { Container, Placeholder, PlaceholderText } from "./Calendar.style";

const Calendar = () => {
  const stripRef = useRef<FlatList>(null);
  const scrollViewRef = useRef<FlatList<any>>();

  const [selectedDate, setSelectedDate] = useState(new Date());
  const [selectedMedicine, setSelectedMedicine] = useState<any>();

  const onSelectDate = useCallback((date: Date) => {
    setSelectedDate(date);
    const index = week.findIndex((item) => isSameDay(item.date, date));
    scrollViewRef.current?.scrollToIndex({ index });
  }, []);

  const selectMedicine = useCallback(
    (medicine: any) => () => {
      setSelectedMedicine(medicine);
    },
    [],
  );

  const clearMedicine = useCallback(() => {
    setSelectedMedicine(undefined);
  }, []);

  const viewabilityConfig = useMemo(
    () => ({
      itemVisiblePercentThreshold: 50,
      minimumViewTime: 150,
    }),
    [],
  );

  const initialScrollIndex = useMemo(() => {
    if (selectedDate) {
      return week.findIndex((item) => isSameDay(item.date, selectedDate));
    } else {
      return 0;
    }
  }, [selectedDate]);

  const onStripScrollEnd = useCallback(
    (direction: "left" | "right", offset: number) => {
      const date =
        direction === "right"
          ? addWeeks(selectedDate, offset)
          : subWeeks(selectedDate, offset);
      onSelectDate(date);
    },
    [onSelectDate, selectedDate],
  );

  const onViewableItemsChanged = useCallback(({ viewableItems }) => {
    if (viewableItems.length === 1) {
      setSelectedDate(viewableItems[0].item.date);
    }
  }, []);

  const ITEM_WIDTH = Dimensions.get("window").width;

  const getItemLayout = useCallback(
    (_, index) => ({
      length: ITEM_WIDTH,
      offset: ITEM_WIDTH * index,
      index,
    }),
    [ITEM_WIDTH],
  );

  const renderItem = useCallback(
    ({ item }) => {
      return item.items.length ? (
        <ScrollView key={item.date.toISOString()} style={{ width: ITEM_WIDTH }}>
          {item.items.map((day, dayIndex) => (
            <Fragment key={dayIndex}>
              <CategoryTitle>{day.title}</CategoryTitle>
              <Tile>
                {day.medicines.map((medicine, index, itemData) => (
                  <CalendarMedicine
                    onPress={selectMedicine(medicine)}
                    Icon={Capsule}
                    palette={MEDICINE.GREEN}
                    key={medicine.id}
                    title={medicine.name}
                    description={`${medicine.dosage} ${medicine.eating}`}
                    time={medicine.time}
                    isLast={index === itemData.length - 1}
                  />
                ))}
              </Tile>
            </Fragment>
          ))}
        </ScrollView>
      ) : (
        <Placeholder>
          <PlaceholderText>Нет лекарств</PlaceholderText>
        </Placeholder>
      );
    },
    [ITEM_WIDTH, selectMedicine],
  );

  return (
    <Container>
      <CalendarStrip
        stripRef={stripRef}
        start={subMonths(new Date(), 1)}
        end={addMonths(new Date(), 1)}
        selectedDate={selectedDate}
        onSelectDate={onSelectDate}
        onScrollEnd={onStripScrollEnd}
      />

      <FlatList
        ref={scrollViewRef}
        data={week}
        horizontal
        pagingEnabled
        decelerationRate="fast"
        showsHorizontalScrollIndicator={false}
        keyExtractor={(item) => `${item.date}`}
        onViewableItemsChanged={onViewableItemsChanged}
        viewabilityConfig={viewabilityConfig}
        initialScrollIndex={initialScrollIndex}
        renderItem={renderItem}
        getItemLayout={getItemLayout}
      />

      <Details
        medicine={selectedMedicine}
        onClose={clearMedicine}
        onAccept={clearMedicine}
        onPostpone={clearMedicine}
        onSkip={clearMedicine}
        onDetails={clearMedicine}
      />
    </Container>
  );
};

export default Calendar;
