import {
  birthdayOfMartinLutherKingJr
} from "./is-x-date";
import {
  BirthdayOfMartinLutherKingJunior,
  NotBirthdayOfMartinLutherKingJunior,
} from "./dates";

beforeEach(() => {
  expect(new Date(Date.now()).getFullYear()).toBeGreaterThanOrEqual(2022);
  jest.useFakeTimers();
});

afterEach(() => {
  jest.runOnlyPendingTimers();
  jest.useRealTimers();
  expect(new Date(Date.now()).getFullYear()).toBeGreaterThanOrEqual(2022);
});

test("is Birthday Of Martin Luther King Junior", () => {
  BirthdayOfMartinLutherKingJunior.forEach((birthday) => {
    jest.setSystemTime(new Date(birthday));
    expect(birthdayOfMartinLutherKingJr()).toEqual(true);
  });
});

test("is Not Birthday Of Martin Luther King Junior", () => {
  NotBirthdayOfMartinLutherKingJunior.forEach((notBirthday) => {
    jest.setSystemTime(new Date(notBirthday));
    expect(birthdayOfMartinLutherKingJr()).toEqual(false);
  });
});
