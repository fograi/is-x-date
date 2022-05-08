const now = () => new Date(Date.now());

const nowMD = () => `${now().getMonth()}-${now().getDate()}`;
const nowM = () => now().getMonth();
const nowDt = () => now().getDate();
const nowDy = () => now().getDay();

export function newYearsEve() {
  return nowMD() === "11-31";
}

export function newYearsDay() {
  return nowMD() === "0-1";
}

export function worldBrailDay() {
  return nowMD() === "0-4";
}

export function twelfthDayOfChristmas() {
  return nowMD() === "0-5";
}

export function worldLogicDay() {
  return nowMD() === "0-14";
}

export function birthdayOfMartinLutherKingJr() {
  return nowM() === 0 && nowDt() > 14 && nowDt() < 22 && nowDy() === 1;
}

export function internationalDayOfEducation() {
  return nowMD() === "0-24";
}

export function internationalHolocaustRemembranceDay() {
  return nowMD() === "0-27";
}

export function dataPrivacyDay() {
  return nowMD() === "0-28";
}

export function imbolc() {
  return nowMD() === "1-1";
}

export function groundHogDay() {
  return nowMD() === "1-2";
}

export function worldWetlandsDay() {
  return nowMD() === "1-2";
}

export function worldCancerDay() {
  return nowMD() === "1-4";
}

export function internationalDayOfHumanFraternity() {
  return nowMD() === "1-4";
}

export function internationalDayOfZeroToleranceForFemaleGenitalMutilation() {
  return nowMD() === "1-6";
}

export function european112Day() {
  return nowMD() === "1-11";
}

export function darwinDay() {
  return nowMD() === "1-12";
}

export function redHandDay() {
  return nowMD() === "1-12";
}

export function worldRadioDay() {
  return nowMD() === "1-12";
}

export function valentinesDay() {
  return nowMD() === "1-14";
}

export function worldDayOfSocialJustice() {
  return nowMD() === "1-20";
}

export function bachelorsDay() {
  return nowMD() === "1-29";
}

export function zeroDiscriminationDay() {
  return nowMD() === "2-1";
}

export function selfInjuryAwarenessDay() {
  return nowMD() === "2-1";
}

export function worldHearingDay() {
  return nowMD() === "2-3";
}

export function worldWildLifeDay() {
  return nowMD() === "2-3";
}

export function worldObesityDay() {
  return nowMD() === "2-4";
}

export function europeanDayOfTheRighteous() {
  return nowMD() === "2-6";
}

export function internationalWomensDay() {
  return nowMD() === "2-8";
}

export function marioDay() {
  return nowMD() === "2-10";
}

export function worldDayAgainstCyberCensorship() {
  return nowMD() === "2-12";
}

export function piDay() {
  return nowMD() === "2-14";
}

export function worldConsumerRightsDay() {
  return nowMD() === "2-15";
}

export function stPatricksDay() {
  return nowMD() === "2-17";
}

export function internationalDayOfHappiness() {
  return nowMD() === "2-20";
}

export function internationalColourDay() {
  return nowMD() === "2-21";
}

export function worldWaterDay() {
  return nowMD() === "2-22";
}

export function worldMeteorologicalDay() {
  return nowMD() === "2-23";
}

export function internationalDayForTheRightToTheTruthConcerningGrossHumanRightsViolationsAndForTheDignityOfVictims() {
  return nowMD() === "2-24";
}

export function euTalentDay() {
  return nowMD() === "2-25";
}

export function internationalDayOfRemembranceOfTheVictimsOfSlaveryAndTheTransatlanticSlaveTrade() {
  return nowMD() === "2-25";
}

export function internationalDayOfSolidarityWithDetainedAndMissingStaffMembers() {
  return nowMD() === "2-25";
}

export function internationalDayOfTheUnbornChild() {
  return nowMD() === "2-25";
}

export function tolkienReadingDay() {
  return nowMD() === "2-25";
}

export function worldTheatreDay() {
  return nowMD() === "2-27";
}

export function internationalTransgenderDayOfVisibility() {
  return nowMD() === "2-31";
}

export function aprilFoolsDay() {
  return nowMD() === "3-1";
}

export function fossilFoolsDay() {
  return nowMD() === "3-1";
}

export function internationalChildrensBookDay() {
  return nowMD() === "3-2";
}

export function worldAutismAwarenessDay() {
  return nowMD() === "3-2";
}

export function internationalDayOfSportForDevelopmentAndPeace() {
  return nowMD() === "3-6";
}

export function internationalAsexualityDay() {
  return nowMD() === "3-6";
}

export function worldHealthDay() {
  return nowMD() === "3-7";
}

export function buddhasBirthday() {
  return nowMD() === "3-8";
}

export function internationalRomaniDay() {
  return nowMD() === "3-8";
}

export function siblingsDay() {
  return nowMD() === "3-10";
}

export function internationalLouieLouieDay() {
  return nowMD() === "3-11";
}

export function worldParkinsonsDay() {
  return nowMD() === "3-11";
}

export function universalDayOfCulture() {
  return nowMD() === "3-15";
}

export function worldArtDay() {
  return nowMD() === "3-15";
}

export function worldVoiceDay() {
  return nowMD() === "3-16";
}

export function worldHemophiliaDay() {
  return nowMD() === "3-17";
}

export function internationalDayForMonumentsAndSites() {
  return nowMD() === "3-18";
}

export function $420() {
  return nowMD() === "3-20";
}

export function grounationDay() {
  return nowMD() === "3-21";
}

export function earthDay() {
  return nowMD() === "3-22";
}

export function internationalPixelStainedTechnopeasantDay() {
  return nowMD() === "3-23";
}

export function worldBookDay() {
  return nowMD() === "3-23";
}

export function fashionRevolutionDay() {
  return nowMD() === "3-24";
}

export function worldDayForLaboratoryAnimals() {
  return nowMD() === "3-24";
}

export function worldMalariaDay() {
  return nowMD() === "3-25";
}

export function worldIntellectualPropertyDay() {
  return nowMD() === "3-26";
}

export function internationalDanceDay() {
  return nowMD() === "3-29";
}

export function internationalJazzDay() {
  return nowMD() === "3-30";
}

export function dayOfRemembranceForAllVictimsOfChemicalWarfare() {
  return nowMD() === "10-30";
}
