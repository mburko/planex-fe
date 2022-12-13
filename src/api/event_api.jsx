import { config } from '@fortawesome/fontawesome-svg-core';
import React, { useEffect, useState } from 'react'
import { BsCheckCircleFill, BsFillXCircleFill } from "react-icons/bs";
import { useNavigate } from 'react-router-dom';
import AxiosClient from '../utilities/AxiosClient';

export const category = ['Birthday', 'Deadline', 'Work', 'Sport', 'Beauty'];
const category2 = ['Birthday', 'Deadline', 'Work', 'Sport', 'Beauty'];

// ********************* event crud *****************************************************
/*
const mockEventInfo = {
	event: 'Test event',
	notes: 'Some details',
	dateOfEvent: new Date(),
	time_from: '14:54',
	time_to: '15:54',
	selectedCategory: 1,
	id: 0, //any value at creation, field is not required in addEvent
	repeat: null
};
*/

function convertEvent(eventInfo) {

	let t1 = new Date(eventInfo.start);
	let t2 = new Date(eventInfo.finish);//.toLocaleTimeString('en-GB').split('T')[1];

	return {
		event: eventInfo.title,
		notes: eventInfo.description,
		dateOfEvent: new Date(eventInfo.start),
		time_from: (t1.getHours().toString() + ":" + t1.getMinutes().toString()),
		time_to: (t2.getHours().toString() + ":" + t2.getMinutes().toString()),

		selectedCategory: category2[eventInfo.category_id], 
		event_id: eventInfo.id
	}
}

function convertDateTime(date, time) {
	let d = date;
	let fullDate = d.getFullYear().toString() + '-' + (d.getMonth() + 1).toString() + '-' + d.getDate().toString();

	const timeH = parseInt(time.split(':')[0]);
	const timeM = parseInt(time.split(':')[1]);
	let res = fullDate + 'T' + timeH.toString() + ":" + timeM.toString() + ":00";
	return res
}


export function apiAddEvent(eventInfo) {
	/*'2022-11-23T18:00:00';//*/
	const dateTimeStart = convertDateTime(eventInfo.dateOfEvent, eventInfo.time_from);
	const dateTimeFinish = convertDateTime(eventInfo.dateOfEvent, eventInfo.time_to);

	console.log(eventInfo);
	AxiosClient.post('/event', {

		category_id: category2.findIndex(cat=> cat === eventInfo.selectedCategory), 
		start: dateTimeStart,
		finish: dateTimeFinish,
		title: eventInfo.event,
		repeat: (eventInfo.selectedRepeat).toString().toUpperCase(), // types DAILY / WEEKLY / YEARLY / null
		description: eventInfo.notes
	}).then((response) => {
		console.log(response);
		return 1;
	}).catch((error) => {
		console.log(error);
		return 0;
	});

	//example, tested --------------------------------
	/*
	apiAddEvent(eventInfo, e);
	*/
}


export function apiUpdateEvent(eventInfo) {

	/*'2022-11-23T18:00:00';//*/
	const dateTimeStart = convertDateTime(eventInfo.dateOfEvent, eventInfo.time_from);
	const dateTimeFinish = convertDateTime(eventInfo.dateOfEvent, eventInfo.time_to);

	//******************** */

	AxiosClient.put('/event', {
		id: eventInfo.event_id,
		category_id: category.findIndex(cat=> cat === eventInfo.selectedCategory), 
		start: dateTimeStart,
		finish: dateTimeFinish,
		title: eventInfo.event,
		repeat: (eventInfo.selectedRepeat).toString().toUpperCase(), // types DAILY / WEEKLY / YEARLY / null
		description: eventInfo.notes
	}).then((response) => {
		console.log(response);
	}).catch((error) => {
		console.log(error);
	});

	//example, not tested --------------------------------
	/*
	apiUpdateEvent(eventInfo);
	*/
}


export function apiDeleteEvent(ev_id) {

	//delete has no request body
	AxiosClient.delete('/event', {
		data: {
			event_id: ev_id
		}
	}).then((response) => {
		console.log(response);
	}).catch((error) => {
		console.log(error);
	});
	//example, not tested --------------------------------
	/*
	apiDeleteEvent(eventInfo, e);
	*/
}


export async function apiGetAllEvents() {

	//create empty list
	let allEvents = [];

	let response = await AxiosClient.get('/event');

	if (response.status === 200) {
		allEvents = response.data;
	} else if (response.data['Response'] !== 'Events not found') {
		//error
		console.log(response);
	}

	//console.log("first", allEvents);
	let allConvEvents = [];
	allEvents.forEach(element => {
		allConvEvents.push(convertEvent(element));
	});
	//console.log("second", allEvents);
	return allConvEvents;

	//example, tested-------------------------
	/*
	evlst = await apiGetAllEvents(e);
	console.log("aaaaaaaaa", evlst);
	let test = evlst[2];
	console.log('event id', test.id);
	console.log('event title', test.title);
	*/
}


// check input parameters format
export async function apiGetAllEventsPeriod(from_datetime, to_datetime) {

	let dt1 = '2022-11-23T18:00:00';
	let dt2 = '2022-12-30T18:00:00';


	let allEvents = [];

	let response = await AxiosClient.post('/event/period', {
			start_period: dt1,//from_datetime,
			finish_period: dt2//to_datetime
	});

	if (response.status === 200) {
		allEvents = response.data;
	} else if (response.data['Response'] !== 'Events in this time period not found') {
		//error
		console.log(response);
	}

	console.log("input", allEvents);
	let allConvEvents = [];
	allEvents.forEach(element => {
		allConvEvents.push(convertEvent(element));
	});

	return allConvEvents;

	//example, not tested, check input parameters-------------------------
	/*
	evlst = await apiGetAllEventsPeriod(datetime1, datetime2, e);
	console.log("aaaaaaaaa", evlst);
	*/
}