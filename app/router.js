import React from 'react'
import {
  TabNavigator,
  createStackNavigator,
  createBottomTabNavigator,
} from 'react-navigation';

import Food from '../screens/Food';
import Academic from '../screens/Academic';
import Wellness from '../screens/Wellness';
import TemplateView from '../screens/TemplateView';

import Events from '../screens/Events';
import EventsView from '../screens/EventsView';

export const FoodStack = createStackNavigator({
  Food: {
    screen: Food
  },
  FoodView: {
    screen: TemplateView
  }
});

export const AcademicStack = createStackNavigator({
  Academic: {
    screen: Academic
  },
  AcademicView: {
    screen: TemplateView
  }
});

export const WellnessStack = createStackNavigator({
  Wellness: {
    screen: Wellness
  },
  WellnessView: {
    screen: TemplateView
  }
});

export const EventsStack = createStackNavigator({
  Events: {
    screen: Events
  },
  EventsView: {
    screen: EventsView
  }
});

export const Tabs = createBottomTabNavigator({
  Academic: {
    screen: AcademicStack
  },
  Wellness: {
    screen: WellnessStack
  },
  Events: {
    screen: EventsStack
  },
  Food: {
    screen: FoodStack
  },
});
