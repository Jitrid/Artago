"use client";
'use strict';
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "./page.module.css";
import React from "react";
import Name from "./Name";
import Abilities from "./Abilities";
// import StickFigure from "./StickHP";
import { Sheet } from "./Sheet";

import ReactDOMClient from "react-dom/client";
import ReactDOMServer from "react-dom/server";

export default function Page() {
  return (
    <Sheet />
  );
}
