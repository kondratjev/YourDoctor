import Ampoule from "../icons/Pills/Ampoule";
import Capsule from "../icons/Pills/Capsule";
import Drop from "../icons/Pills/Drop";
import Inhaler from "../icons/Pills/Inhaler";
import Injections from "../icons/Pills/Injections";
import Patch from "../icons/Pills/Patch";
import Pill from "../icons/Pills/Pill";
import Powder from "../icons/Pills/Powder";
import Suppositorie from "../icons/Pills/Suppositorie";
import Syrop from "../icons/Pills/Syrop";

export enum TYPES_ENUM {
  PILLS,
  CAPSULES,
  DROPS,
  SPRAY,
  SYRUP,
  POWDER,
  INHALER,
  PATCH,
  PACKET,
  AMPOULES,
  INJECTIONS,
  SUPPOSITORIES,
}

export const TYPES = [
  { label: "Таблетки", value: TYPES_ENUM.PILLS, Icon: Pill },
  { label: "Капсулы", value: TYPES_ENUM.CAPSULES, Icon: Capsule },
  { label: "Капли", value: TYPES_ENUM.DROPS, Icon: Drop },
  { label: "Спрей", value: TYPES_ENUM.SPRAY, Icon: Drop },
  { label: "Сироп", value: TYPES_ENUM.SYRUP, Icon: Syrop },
  { label: "Порошок", value: TYPES_ENUM.POWDER, Icon: Powder },
  { label: "Ингалятор", value: TYPES_ENUM.INHALER, Icon: Inhaler },
  { label: "Пластырь", value: TYPES_ENUM.PATCH, Icon: Patch },
  { label: "Пакетик", value: TYPES_ENUM.PACKET, Icon: Drop },
  { label: "Ампулы", value: TYPES_ENUM.AMPOULES, Icon: Ampoule },
  { label: "Инъекции", value: TYPES_ENUM.INJECTIONS, Icon: Injections },
  {
    label: "Суппозитории",
    value: TYPES_ENUM.SUPPOSITORIES,
    Icon: Suppositorie,
  },
];

type UNIT_TYPE = { label: string; value: string };
export const UNITS: UNIT_TYPE[] = [
  { label: "гр", value: "гр" },
  {
    label: "ME",
    value: "ME",
  },
  {
    label: "мкг",
    value: "мкг",
  },
  {
    label: "мкг/час",
    value: "мкг/час",
  },
  {
    label: "мкг/мл",
    value: "мкг/мл",
  },
  {
    label: "мЭкв",
    value: "мЭкв",
  },
  {
    label: "мг",
    value: "мг",
  },
  { label: "мг/см2", value: "мг/см2" },
  { label: "мг/г", value: "мг/г" },
  { label: "мг/мл", value: "мг/мл" },
  { label: "мл", value: "мл" },
  { label: "%", value: "%" },
];
