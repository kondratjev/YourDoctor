import { addDays, differenceInDays, startOfDay } from "date-fns";
import React, { useState } from "react";
import { ScrollView, TextInput, TouchableOpacity, View } from "react-native";
import FieldControl from "../../components/FieldControl";
import TextField from "../../components/TextField";
import Tile from "../../components/Tile";
import { TYPES_ENUM } from "../../constants";
import { MEDICINE } from "../../theme/palette";
import { getWordForm } from "../../utils/format";
import DaysField from "./DaysField";
import DoseField from "./DoseField";
import styles from "./EditMedicine.styles";
import PickerField from "./PickerField";
import ScreenField from "./ScreenField";
import TypeField from "./TypeField";

const EditMedicine = () => {
  const [type, setType] = useState(TYPES_ENUM.PILLS);
  const [meal, setMeal] = useState(0);
  const [periodicity, setPeriodicity] = useState(0);
  const [selectedColor, setSelectedColor] = useState(MEDICINE.RED);
  const [schedule, setSchedule] = useState([
    {
      time: new Date(),
      dose: 1,
    },
  ]);
  const [period, setPeriod] = useState({
    startDate: new Date(),
    endDate: addDays(new Date(), 1),
    days: 1,
  });
  const [days, setDays] = useState([0]);
  const [dosage, setDosage] = useState({
    count: 1,
    units: "мг",
  });

  return (
    <ScrollView style={styles.container}>
      <Tile title="Описание" style={styles.tile}>
        <TextInput
          style={styles.nameInput}
          placeholder="Название"
          placeholderTextColor="#9f9f9f"
          defaultValue="Нурофен"
        />

        <TypeField
          label="Тип лекарства"
          value={type}
          palette={selectedColor}
          onAccept={(value) => setType(value)}
        />

        <DoseField
          label="Дозировка"
          value={dosage}
          onAccept={(value) => setDosage(value)}
        />

        <View style={styles.colors}>
          {Object.entries(MEDICINE).map(([label, value]) => (
            <TouchableOpacity
              key={label}
              style={
                selectedColor === value
                  ? [styles.color, { borderColor: value.color }]
                  : styles.color
              }
              onPress={() => setSelectedColor(value)}>
              <View
                style={[styles.colorInner, { backgroundColor: value.color }]}
              />
            </TouchableOpacity>
          ))}
        </View>
      </Tile>

      <Tile title="Инструкция" style={styles.tile}>
        <PickerField
          label="Периодичность"
          value={periodicity}
          items={[
            { label: "По необходимости", value: 0 },
            { label: "Каждый день", value: 1 },
            { label: "Определенные дни", value: 2 },
            { label: "Дневной интервал", value: 3 },
          ]}
          onAccept={(value) => setPeriodicity(value as number)}
        />

        {periodicity === 2 && (
          <DaysField
            label="Дни приема"
            values={days}
            onAccept={(values) => setDays(values)}
          />
        )}

        {periodicity !== 0 && (
          <ScreenField
            label={`${schedule.length} ${getWordForm(schedule.length, [
              "раз",
              "раза",
              "раз",
            ])} в день`}
            modalLabel="Расписание"
            screen="EditSchedule"
            params={{
              values: schedule,
              onAccept: (value) => setSchedule(value),
            }}
          />
        )}

        {periodicity !== 0 && (
          <ScreenField
            label={`${differenceInDays(
              startOfDay(period.endDate),
              startOfDay(period.startDate),
            )} ${getWordForm(
              differenceInDays(
                startOfDay(period.endDate),
                startOfDay(period.startDate),
              ),
              ["день", "дня", "дней"],
            )}`}
            modalLabel="Период приема"
            screen="EditPeriod"
            params={{
              value: period,
              onAccept: (value) => setPeriod(value),
            }}
          />
        )}
      </Tile>

      <Tile title="Прочее" style={styles.tile}>
        <PickerField
          label="Прием пищи"
          value={meal}
          items={[
            { label: "Не важно", value: 0 },
            { label: "Перед едой", value: 1 },
            { label: "Во время еды", value: 2 },
            { label: "После еды", value: 2 },
          ]}
          onAccept={(value) => setMeal(value as number)}
        />

        <FieldControl label="Комментарий">
          <TextField value="—" style={styles.comment} />
        </FieldControl>
      </Tile>
    </ScrollView>
  );
};

export default EditMedicine;
