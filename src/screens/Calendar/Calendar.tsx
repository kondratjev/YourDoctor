import { useNavigation } from "@react-navigation/core";
import { addMonths, format, isSameDay, subMonths } from "date-fns";
import React, {
  useCallback,
  useEffect,
  useLayoutEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import {
  Dimensions,
  FlatList,
  NativeScrollEvent,
  NativeSyntheticEvent,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import CalendarMedicine from "../../components/Medicine2";
import List from "../../icons/List";
import Capsule from "../../icons/Pills/Capsule";
import { MEDICINE } from "../../theme/palette";
import { week } from "../../__mock__/calendar";
import styles from "./Calendar.styles";
import CalendarStrip from "./CalendarStrip";
import Details from "./Details";

const Calendar = () => {
  const stripRef = useRef<FlatList>(null);
  const flatListRef = useRef<FlatList>(null);

  const navigation = useNavigation();

  const [selectedDate, setSelectedDate] = useState(new Date());
  const [selectedMedicine, setSelectedMedicine] = useState<any>();

  useEffect(() => {
    navigation.setOptions({
      title: format(selectedDate, "d MMMM"),
    });
  }, [navigation, selectedDate]);

  const goToMedicines = useCallback(() => {
    navigation.navigate("Medicines");
  }, [navigation]);

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <TouchableOpacity style={{ marginRight: 20 }} onPress={goToMedicines}>
          <List />
        </TouchableOpacity>
      ),
    });
  }, [goToMedicines, navigation]);

  const onDateChange = useCallback((date: Date) => {
    setSelectedDate(date);
    const index = week.findIndex((item) => isSameDay(item.date, date));
    flatListRef.current?.scrollToIndex({ index, animated: false });
  }, []);

  const onWeekChange = useCallback(
    (date: Date) => {
      onDateChange(date);
    },
    [onDateChange],
  );

  const selectMedicine = useCallback(
    (medicine: any) => () => {
      setSelectedMedicine(medicine);
    },
    [],
  );

  const clearMedicine = useCallback(() => {
    setSelectedMedicine(undefined);
  }, []);

  const initialScrollIndex = useMemo(() => {
    return week.findIndex((item) => isSameDay(item.date, selectedDate));
  }, [selectedDate]);

  const onScrollEnd = (event: NativeSyntheticEvent<NativeScrollEvent>) => {
    const currentOffset = event.nativeEvent.contentOffset.x;
    const index = Math.round(currentOffset / ITEM_WIDTH);
    setSelectedDate(week[index].date);
  };

  const ITEM_WIDTH = Dimensions.get("window").width;

  const getItemLayout = (_, index) => ({
    length: ITEM_WIDTH,
    offset: ITEM_WIDTH * index,
    index,
  });

  const renderItem = ({ item }) => {
    return item.items.length ? (
      <ScrollView key={item.date.toISOString()} style={{ width: ITEM_WIDTH }}>
        {item.items.map((day, dayIndex) => (
          <View key={dayIndex} style={{ marginTop: 25 }}>
            <Text
              style={{
                fontSize: 20,
                fontWeight: "600",
                marginLeft: 25,
                color: "#222",
              }}>
              12:00
            </Text>
            {day.medicines.map((medicine) => (
              <CalendarMedicine
                onPress={selectMedicine(medicine)}
                Icon={Capsule}
                palette={MEDICINE.GREEN}
                key={medicine.id}
                name={medicine.name}
                description={`${medicine.dosage} ${medicine.eating}`}
              />
            ))}
          </View>
        ))}
      </ScrollView>
    ) : (
      <View style={styles.placeholder}>
        <Text style={styles.placeholderText}>Нет лекарств</Text>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <CalendarStrip
        stripRef={stripRef}
        start={subMonths(new Date(), 1)}
        end={addMonths(new Date(), 1)}
        selectedDate={selectedDate}
        onDateChange={onDateChange}
        onWeekChange={onWeekChange}
      />

      <FlatList
        ref={flatListRef}
        data={week}
        horizontal
        pagingEnabled
        decelerationRate="fast"
        showsHorizontalScrollIndicator={false}
        keyExtractor={(item) => `${item.date}`}
        initialScrollIndex={initialScrollIndex}
        renderItem={renderItem}
        getItemLayout={getItemLayout}
        scrollEventThrottle={16}
        initialNumToRender={7}
        onMomentumScrollEnd={onScrollEnd}
      />

      <Details
        medicine={selectedMedicine}
        onClose={clearMedicine}
        onAccept={clearMedicine}
        onPostpone={clearMedicine}
        onSkip={clearMedicine}
        onDetails={clearMedicine}
      />
    </View>
  );
};

export default Calendar;
