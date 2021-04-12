/* eslint-disable func-names */

/*
Below is the format of the input string. Separated by vertical whitespace
*/

export const inputString = `"Company A" requires an apartment or house, and property insurance.
"Company B" requires 5 door car or 4 door car, and a driver's license and car insurance.
"Company C" requires a social security number and a work permit. 
"Company D" requires an apartment or a flat or a house.
"Company E" requires a driver's license and a 2 door car or a 3 door car or a 4 door car or a 5 door car.
"Company F" requires a scooter or a bike, or a motorcycle and a driver's license and motorcycle insurance.
"Company G" requires a massage qualification certificate and liability insurance.
"Company H" requires a storage place or a garage.
"Company J" doesn't require anything, you can come and start working immediately.
"Company K" requires a PayPal account.`;

const requireCheck = /requires/i;
const notRequireCheck = /doesn't require anything/i;
const regex = /"(.*?)" (.*)/i;

/*
The Assumption is Driving license will have the word driver in `drivers license` 
*/
const re = /bike|driver/i;

/*
Companies function takes in the input string and returns an array of objects  
*/

export const Companies = function (input) {
  const filteredCompany = [];

  const splitinput = input.split('\n');
  splitinput.forEach((item) => {
    if (requireCheck.test(item)) {
      const company = item.match(regex)[1];
      const str1 = item.match(regex)[2];
      const isValid = re.test(str1);
      filteredCompany.push({
        company,
        isValid,
      });
    }
    if (notRequireCheck.test(item)) {
      const company = item.match(regex)[1];
      filteredCompany.push({
        company,
        isValid: true,
      });
    }
  });

  return filteredCompany;
};

module.exports = { Companies, inputString };
