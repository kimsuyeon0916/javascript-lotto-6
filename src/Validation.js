import { INPUT_ERROR, NUMBER_CRITERIA, UNIT } from "./Constants.js";

const Validation = {
  checkMoney(money) {
    this.checkNull(money);
    this.checkBlank(money);
    this.checkChar(money);
    this.checkIndivisible(money);
  },

  checkNumbers(numberList) {
    this.checkNull(numberList);
    this.checkWrong(numberList);

    numberList.forEach((number) => {
      this.checkEmpty(number);
      this.checkBlank(number);
      this.checkChar(number);
      this.checkOutOfRange(number);
    });

    this.checkDuplicate(numberList);
  },

  checkNull(number) {
    if (number.length === 0) {
      throw new Error(INPUT_ERROR.null);
    }
  },

  checkBlank(number) {
    if (number.replaceAll(" ", "").length !== number.length) {
      throw new Error(INPUT_ERROR.blank);
    }
  },

  checkChar(number) {
    if (Number.isNaN(Number(number))) {
      throw new Error(INPUT_ERROR.char);
    }
  },

  checkIndivisible(money) {
    if (Number(money) % UNIT !== 0) {
      throw new Error(INPUT_ERROR.indivisible);
    }
  },

  checkEmpty(number) {
    if (number === "") {
      throw new Error(INPUT_ERROR.empty);
    }
  },

  checkWrong(numberList) {
    if (numberList.length !== NUMBER_CRITERIA) {
      throw new Error(INPUT_ERROR.wrong);
    }
  },

  checkOutOfRange(number) {
    if (number < 1 || number > 45) {
      throw new Error(INPUT_ERROR.outOfRange);
    }
  },

  checkDuplicate(numberList) {
    if (new Set(numberList).length !== NUMBER_CRITERIA) {
      throw new Error(INPUT_ERROR.duplicate);
    }
  },
};

export default Validation;
