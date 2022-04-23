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
    console.info(nowM, nowDt, nowDy);
    return nowM() === 0 && (nowDt() > 14 && nowDt() < 22) && nowDy() === 1;
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