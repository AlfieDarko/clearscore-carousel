import React from "react";
import { CreditScoreSlide } from "../SlideContent/CreditScore/CreditScore";
import { LongTermDebtSlide } from "../SlideContent/LongTermDebt";
import { Carousel } from "../Carousel/Carousesl";
import "./dashboard.scss";

export default () => (
  // TODO: Fetch calls from the dashboard
  <div>
    <Carousel>
      <CreditScoreSlide score={800} title={"Credit Score"} />
      <LongTermDebtSlide
        title={"Long Term Debt"}
        longTermDebt={500}
        changeInLongTermDebt={300}
      />
    </Carousel>
  </div>
);
