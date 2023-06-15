import { When, Then,Given } from "@badeball/cypress-cucumber-preprocessor";


Given(/^I am on the flight search page$/, () => {
	return true;
});

Given(/^I click "([^"]*)" in arrow buttons till 9$/, (args1) => {
	console.log(args1);
	return true;
});

When(/^I click "([^"]*)"$/, (args1) => {
	console.log(args1);
	return true;
});

Then(/^It should be disabled$/, () => {
	return true;
});

Given(/^I choose the number of Adult is 1$/, () => {
	return true;
});

When(/^I choose 2 of infants$/, () => {
	return true;
});

Then(/^I should see error like "([^"]*)"$/, (args1) => {
	console.log(args1);
	return true;
});

Given(/^I select trip type as "([^"]*)"$/, (args1) => {
	console.log(args1);
	return true;
});

Then(/^I select airports as "([^"]*)"$/, (args1) => {
	console.log(args1);
	return true;
});

Then(/^I select travel date in "([^"]*)" days$/, (args1) => {
	console.log(args1);
	return true;
});

When(/^I select number of passengers 0$/, () => {
	return true;
});

When(/^I click submit button$/, () => {
	return true;
});

Then(/^I should see empty passengers number error message$/, () => {
	return true;
});

Given(/^The number of Adult is 1$/, () => {
	return true;
});

When(/^I click "([^"]*)" button$/, (args1) => {
	console.log(args1);
	return true;
});

Then(/^It should be disabled$/, () => {
	return true;
});

Given(/^I select the passengers number 2$/, () => {
	return true;
});

Then(/^I can adjust the numbers by an arrwo buttons '-' and '+'$/, () => {
	return true;
});

Given(/^I select trip type as "([^"]*)"$/, (args1) => {
	console.log(args1);
	return true;
});

Then(/^I select airports as "([^"]*)"$/, (args1) => {
	console.log(args1);
	return true;
});

Then(/^I select travel date in "([^"]*)" days$/, (args1) => {
	console.log(args1);
	return true;
});

Then(/^I select passengers as "([^"]*)"$/, (args1) => {
	console.log(args1);
	return true;
});

Then(/^I click submit button$/, () => {
	return true;
});

Then(/^I should see search result reflects my selection$/, () => {
	return true;
});
