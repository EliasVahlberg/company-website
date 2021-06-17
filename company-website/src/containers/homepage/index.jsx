import React from "react";
import styled from "styled-components";
import { Marginer } from "../../components/marginer";
import { SeoInfoSection } from "./seoInfoSection";
import { FooterSection } from "./FooterSection";
import { TopSection } from "./topSection";

const PageContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
`;

export function HomePage(props) {
  return (
    <PageContainer>
      <TopSection />
      <SeoInfoSection />
      <Marginer direction="vertical" margin="8em" />
      <FooterSection />
    </PageContainer>
  );
}
