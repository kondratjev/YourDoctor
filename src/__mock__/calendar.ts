import {
  addMonths,
  eachDayOfInterval,
  endOfWeek,
  startOfWeek,
  subMonths,
} from "date-fns";
import { ru } from "date-fns/locale";

const items = [
  {
    title: "Утро",
    medicines: [
      {
        id: "0",
        type: "Капли",
        name: "Цитрамон",
        dosage: "100 мг",
        eating: "до еды",
        time: "10:30",
        comment: "Комментарий длинный как мой хер, хехе",
      },
      {
        id: "1",
        type: "Капли",
        name: "Цитрамон",
        dosage: "100 мг",
        eating: "до еды",
        time: "10:30",
        comment: "Комментарий длинный как мой хер, хехе",
      },
    ],
  },
  {
    title: "День",
    medicines: [
      {
        id: "0",
        type: "Капли",
        name: "Цитрамон",
        dosage: "100 мг",
        eating: "до еды",
        time: "10:30",
      },
      {
        id: "1",
        type: "Капли",
        name: "Цитрамон",
        dosage: "100 мг",
        eating: "до еды",
        time: "10:30",
        comment: "Комментарий длинный как мой хер, хехе",
      },
    ],
  },
];

export const week = eachDayOfInterval({
  start: startOfWeek(subMonths(new Date(), 1), { locale: ru }),
  end: endOfWeek(addMonths(new Date(), 1), { locale: ru }),
}).map((date, index) => {
  return {
    date,
    items: index % 3 ? items : [],
  };
});
