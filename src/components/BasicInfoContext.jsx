"use client";

import { createContext, useContext, useState, useEffect } from "react";
import axios from "axios";

const defaultBasicInfo = {
  comp_logo: "",
  comp_footer_logo: "",
  email1: "",
  email2: "",
  mobile_no_1: "",
  mobile_no_2: "",
  address: "",
  facebook_url: "",
  insta_url: "",
  linkedin_url: "",
  youtube_url: "",
  twitter_url: "",
  map_url: "",
};

const BasicInfoContext = createContext({
  basicInfo: defaultBasicInfo,
  loading: true,
});

export function BasicInfoProvider({ children }) {
  const [basicInfo, setBasicInfo] = useState(defaultBasicInfo);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get("/api/admin/basicInfo")
      .then((response) => {
        setBasicInfo(response.data);
      })
      .catch((error) => {
        console.error("Failed to fetch basic info:", error);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  return (
    <BasicInfoContext.Provider value={{ basicInfo, loading }}>
      {children}
    </BasicInfoContext.Provider>
  );
}

export function useBasicInfo() {
  return useContext(BasicInfoContext);
}
