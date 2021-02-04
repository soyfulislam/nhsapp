import React, { useState, useEffect } from "react";
import "./App.css";
import NavBar from "./components/NavBar";
import Container from "@material-ui/core/Container";
import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/core/styles";
import { Slider, Grid, Paper } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
      width: "25ch",
    },
  },
  grid: {
    width: "100%",
    padding: "20px",
  },
  paper: {
    padding: theme.spacing(2),
    height: "auto",
    textAlign: "center",
    fontSize: "20px",
  },
  container: {
    display: "grid",
    gridTemplateColumns: "repeat(12, 1fr)",
    gridGap: theme.spacing(3),
  },
}));

function App() {
  // const [principal, setPrincipal] = useState(0);
  const [newPatients, setNewPatients] = useState(0);
  const [perMdt, setPerMdt] = useState(0);
  const [perPersonIH, setPerPersonIH] = useState(0);
  const [perPersonRH, setPerPersonRH] = useState(0);
  const [perPersonIHCons, setPerPersonIHCons] = useState(0);
  const [perPersonRHCons, setPerPersonRHCons] = useState(0);
  const [perPersonIHMdt, setPerPersonIHMdt] = useState(0);
  const [perPersonRHMdt, setPerPersonRHMdt] = useState(0);
  const [perPersonIHSec, setPerPersonIHSec] = useState(0);
  const [perPersonRHSec, setPerPersonRHSec] = useState(0);

  //Requesting PP
  const [perPersonIHOT, setPerPersonIHOT] = useState(0);
  const [perPersonRHOT, setPerPersonRHOT] = useState(0);
  const [perPersonIHConsOT, setPerPersonIHConsOT] = useState(0);
  const [perPersonRHConsOT, setPerPersonRHConsOT] = useState(0);
  const [perPersonIHMdtOT, setPerPersonIHMdtOT] = useState(0);
  const [perPersonRHMdtOT, setPerPersonRHMdtOT] = useState(0);
  const [perPersonIHSecOT, setPerPersonIHSecOT] = useState(0);
  const [perPersonRHSecOT, setPerPersonRHSecOT] = useState(0);

  //Pathway tracking PP
  const [perPersonIHPT, setPerPersonIHPT] = useState(0);
  const [perPersonRHPT, setPerPersonRHPT] = useState(0);
  const [perPersonIHConsPT, setPerPersonIHConsPT] = useState(0);
  const [perPersonRHConsPT, setPerPersonRHConsPT] = useState(0);
  const [perPersonIHMdtPT, setPerPersonIHMdtPT] = useState(0);
  const [perPersonRHMdtPT, setPerPersonRHMdtPT] = useState(0);
  const [perPersonIHSecPT, setPerPersonIHSecPT] = useState(0);
  const [perPersonRHSecPT, setPerPersonRHSecPT] = useState(0);

  //PE PP
  const [perPersonIHPE, setPerPersonIHPE] = useState(0);
  const [perPersonRHPE, setPerPersonRHPE] = useState(0);
  const [perPersonIHConsPE, setPerPersonIHConsPE] = useState(0);
  const [perPersonRHConsPE, setPerPersonRHConsPE] = useState(0);
  const [perPersonIHMdtPE, setPerPersonIHMdtPE] = useState(0);
  const [perPersonRHMdtPE, setPerPersonRHMdtPE] = useState(0);
  const [perPersonIHSecPE, setPerPersonIHSecPE] = useState(0);
  const [perPersonRHSecPE, setPerPersonRHSecPE] = useState(0);

  //MDP Prep PP
  const [perPersonIHMDT, setPerPersonIHMDT] = useState(0);
  const [perPersonRHMDT, setPerPersonRHMDT] = useState(0);
  const [perPersonIHConsMDT, setPerPersonIHConsMDT] = useState(0);
  const [perPersonRHConsMDT, setPerPersonRHConsMDT] = useState(0);
  const [perPersonIHMdtMDT, setPerPersonIHMdtMDT] = useState(0);
  const [perPersonRHMdtMDT, setPerPersonRHMdtMDT] = useState(0);
  const [perPersonIHSecMDT, setPerPersonIHSecMDT] = useState(0);
  const [perPersonRHSecMDT, setPerPersonRHSecMDT] = useState(0);

  const [Percentage, setPercentage] = useState(0);
  const [PercentageOT, setPercentageOT] = useState(0);
  const [PercentagePT, setPercentagePT] = useState(0);
  const [PercentageMDT, setPercentageMDT] = useState(0);
  const [PercentagePE, setPercentagePE] = useState(0);
  const [result, setResult] = useState(0);
  const [resultOT, setResultOT] = useState(0);
  const [resultPT, setResultPT] = useState(0);
  const [resultMDT, setResultMDT] = useState(0);
  const [resultPE, setResultPE] = useState(0);
  const [total, setTotal] = useState(0);
  const [grandTotal, setGrandTotal] = useState(0);
  const [grandAsiisTotal, setGrandAsisTotal] = useState(0);
  const [grandPSTotal, setGrandPSTotal] = useState(0);

  const [BeforeSavingsTotal, setBeforeSavingsTotal] = useState(0);
  const [potenialSavingsTotal, setPotenialSavingsTotal] = useState(0);

  const [intialHours, setIntailHours] = useState(0);
  const [intialHoursCons, setIntailHoursCons] = useState(0);
  const [intialHoursMdt, setIntailHoursMdt] = useState(0);
  const [intialHoursSec, setIntailHoursSec] = useState(0);

  //Order test
  const [intialHoursOT, setIntailHoursOT] = useState(0);
  const [intialHoursConsOT, setIntailHoursConsOT] = useState(0);
  const [intialHoursMdtOT, setIntailHoursMdtOT] = useState(0);
  const [intialHoursSecOT, setIntailHoursSecOT] = useState(0);
  const [reducedHoursConsOT, setReducedHoursConsOT] = useState(0);
  const [reducedHoursMdtOT, setReducedHoursMdtOT] = useState(0);
  const [reducedHoursSecOT, setReducedHoursSecOT] = useState(0);
  const [reducedHoursOT, setReducedHoursOT] = useState(0);
  const [intialHoursResOT, setIntailHoursResOT] = useState(0);
  const [reducedHoursResOT, setReducedHoursResOT] = useState(0);

  // pathway tracking
  const [intialHoursPT, setIntailHoursPT] = useState(0);
  const [intialHoursConsPT, setIntailHoursConsPT] = useState(0);
  const [intialHoursMdtPT, setIntailHoursMdtPT] = useState(0);
  const [intialHoursSecPT, setIntailHoursSecPT] = useState(0);
  const [reducedHoursConsPT, setReducedHoursConsPT] = useState(0);
  const [reducedHoursMdtPT, setReducedHoursMdtPT] = useState(0);
  const [reducedHoursSecPT, setReducedHoursSecPT] = useState(0);
  const [reducedHoursPT, setReducedHoursPT] = useState(0);
  const [intialHoursResPT, setIntailHoursResPT] = useState(0);
  const [reducedHoursResPT, setReducedHoursResPT] = useState(0);

  // MDT
  const [intialHoursMDT, setIntailHoursMDT] = useState(0);
  const [intialHoursConsMDT, setIntailHoursConsMDT] = useState(0);
  const [intialHoursMdtMDT, setIntailHoursMdtMDT] = useState(0);
  const [intialHoursSecMDT, setIntailHoursSecMDT] = useState(0);
  const [reducedHoursConsMDT, setReducedHoursConsMDT] = useState(0);
  const [reducedHoursMdtMDT, setReducedHoursMdtMDT] = useState(0);
  const [reducedHoursSecMDT, setReducedHoursSecMDT] = useState(0);
  const [reducedHoursMDT, setReducedHoursMDT] = useState(0);
  const [intialHoursResMDT, setIntailHoursResMDT] = useState(0);
  const [reducedHoursResMDT, setReducedHoursResMDT] = useState(0);

  // PE
  const [intialHoursPE, setIntailHoursPE] = useState(0);
  const [intialHoursConsPE, setIntailHoursConsPE] = useState(0);
  const [intialHoursMdtPE, setIntailHoursMdtPE] = useState(0);
  const [intialHoursSecPE, setIntailHoursSecPE] = useState(0);
  const [reducedHoursConsPE, setReducedHoursConsPE] = useState(0);
  const [reducedHoursMdtPE, setReducedHoursMdtPE] = useState(0);
  const [reducedHoursSecPE, setReducedHoursSecPE] = useState(0);
  const [reducedHoursPE, setReducedHoursPE] = useState(0);
  const [intialHoursResPE, setIntailHoursResPE] = useState(0);
  const [reducedHoursResPE, setReducedHoursResPE] = useState(0);

  // referral
  const [reducedHoursCons, setReducedHoursCons] = useState(0);
  const [reducedHoursMdt, setReducedHoursMdt] = useState(0);
  const [reducedHoursSec, setReducedHoursSec] = useState(0);
  const [reducedHours, setReducedHours] = useState(0);
  const [intialHoursRes, setIntailHoursRes] = useState(0);
  const [reducedHoursRes, setReducedHoursRes] = useState(0);

  const classes = useStyles();

  const calculate = () => {
    //formal Y-Y*(slider %)= X
    const resultc = (reducedHoursRes / 100) * Percentage;
    const newRes = reducedHoursRes - resultc;
    setResult(newRes);
  };

  const calculateOT = () => {
    //formal Y-Y*(slider %)= X
    const resultcot = (reducedHoursResOT / 100) * PercentageOT;
    const newResOT = reducedHoursResOT - resultcot;
    setResultOT(newResOT);
  };

  const calculatePT = () => {
    //formal Y-Y*(slider %)= X
    const resultcPT = (reducedHoursResPT / 100) * PercentagePT;
    const newResPT = reducedHoursResPT - resultcPT;
    setResultPT(newResPT);
  };

  const calculateMDT = () => {
    //formal Y-Y*(slider %)= X
    const resultcMDT = (reducedHoursResMDT / 100) * PercentageMDT;
    const newResMDT = reducedHoursResMDT - resultcMDT;
    setResultMDT(newResMDT);
  };

  const calculatePE = () => {
    //formal Y-Y*(slider %)= X
    const resultcPE = (reducedHoursResPE / 100) * PercentagePE;
    const newResPE = reducedHoursResPE - resultcPE;
    setResultPE(newResPE);
  };

  // first
  const calculatePerPerson = () => {
    const calPerperson = (newPatients * perPersonIH) / 60;
    const calPerpersonCons = (newPatients * perPersonIHCons) / 60;
    const calPerpersonMdt = (newPatients * perPersonIHMdt) / 60;
    const calPerpersonSec = (newPatients * perPersonIHSec) / 60;

    const calPerpersonot = (newPatients * perPersonIHOT) / 60;
    const calPerpersonConsot = (newPatients * perPersonIHConsOT) / 60;
    const calPerpersonMdtsot = (newPatients * perPersonIHMdtOT) / 60;
    const calPerpersonSecot = (newPatients * perPersonIHSecOT) / 60;

    const calPerpersonPE = (newPatients * perPersonIHPE) / 60;
    const calPerpersonConsPE = (newPatients * perPersonIHConsPE) / 60;
    const calPerpersonMdtsPE = (newPatients * perPersonIHMdtPE) / 60;
    const calPerpersonSecPE = (newPatients * perPersonIHSecPE) / 60;

    const pathWay = parseInt(newPatients) + parseInt(perMdt);
    const calPerpersonPT = (pathWay * perPersonIHPT) / 60;
    const calPerpersonConsPT = (pathWay * perPersonIHConsPT) / 60;
    const calPerpersonMdtsPT = (pathWay * perPersonIHMdtPT) / 60;
    const calPerpersonSecPT = (pathWay * perPersonIHSecPT) / 60;

    const calPerpersonMDT = (perMdt * perPersonIHMDT) / 60;
    const calPerpersonConsMDT = (perMdt * perPersonIHConsMDT) / 60;
    const calPerpersonMdtsMDT = (perMdt * perPersonIHMdtMDT) / 60;
    const calPerpersonSecMDT = (perMdt * perPersonIHSecMDT) / 60;

    setIntailHours(calPerperson.toFixed(2));
    setIntailHoursCons(calPerpersonCons.toFixed(2));
    setIntailHoursMdt(calPerpersonMdt.toFixed(2));
    setIntailHoursSec(calPerpersonSec.toFixed(2));
    //ot
    setIntailHoursOT(calPerpersonot.toFixed(2));
    setIntailHoursConsOT(calPerpersonConsot.toFixed(2));
    setIntailHoursMdtOT(calPerpersonMdtsot.toFixed(2));
    setIntailHoursSecOT(calPerpersonSecot.toFixed(2));
    //PE
    setIntailHoursPE(calPerpersonPE.toFixed(2));
    setIntailHoursConsPE(calPerpersonConsPE.toFixed(2));
    setIntailHoursMdtPE(calPerpersonMdtsPE.toFixed(2));
    setIntailHoursSecPE(calPerpersonSecPE.toFixed(2));
    // PT
    setIntailHoursPT(calPerpersonPT.toFixed(2));
    setIntailHoursConsPT(calPerpersonConsPT.toFixed(2));
    setIntailHoursMdtPT(calPerpersonMdtsPT.toFixed(2));
    setIntailHoursSecPT(calPerpersonSecPT.toFixed(2));
    // MDT
    setIntailHoursMDT(calPerpersonMDT.toFixed(2));
    setIntailHoursConsMDT(calPerpersonConsMDT.toFixed(2));
    setIntailHoursMdtMDT(calPerpersonMdtsMDT.toFixed(2));
    setIntailHoursSecMDT(calPerpersonSecMDT.toFixed(2));
  };

  const calculatePerPersonRH = () => {
    const calPerpersonRH = (newPatients * perPersonRH) / 60;
    const calPerpersonRHCons = (newPatients * perPersonRHCons) / 60;
    const calPerpersonRHMdt = (newPatients * perPersonRHMdt) / 60;
    const calPerpersonRHSec = (newPatients * perPersonRHSec) / 60;

    const calPerpersonRHoT = (newPatients * perPersonRHOT) / 60;
    const calPerpersonRHConsoT = (newPatients * perPersonRHConsOT) / 60;
    const calPerpersonRHMdtoT = (newPatients * perPersonRHMdtOT) / 60;
    const calPerpersonRHSecoT = (newPatients * perPersonRHSecOT) / 60;

    const calPerpersonRHPE = (newPatients * perPersonRHPE) / 60;
    const calPerpersonRHConsPE = (newPatients * perPersonRHConsPE) / 60;
    const calPerpersonRHMdtPE = (newPatients * perPersonRHMdtPE) / 60;
    const calPerpersonRHSecPE = (newPatients * perPersonRHSecPE) / 60;

    const pathWay = parseInt(newPatients) + parseInt(perMdt);
    const calPerpersonRHPT = (pathWay * perPersonRHPT) / 60;
    const calPerpersonRHConsPT = (pathWay * perPersonRHConsPT) / 60;
    const calPerpersonRHMdtPT = (pathWay * perPersonRHMdtPT) / 60;
    const calPerpersonRHSecPT = (pathWay * perPersonRHSecPT) / 60;

    const calPerpersonRHMDT = (perMdt * perPersonRHMDT) / 60;
    const calPerpersonRHConsMDT = (perMdt * perPersonRHConsMDT) / 60;
    const calPerpersonRHMdtMDT = (perMdt * perPersonRHMdtMDT) / 60;
    const calPerpersonRHSecMDT = (perMdt * perPersonRHSecMDT) / 60;

    setReducedHours(calPerpersonRH.toFixed(2));
    setReducedHoursCons(calPerpersonRHCons.toFixed(2));
    setReducedHoursMdt(calPerpersonRHMdt.toFixed(2));
    setReducedHoursSec(calPerpersonRHSec.toFixed(2));
    //ot
    setReducedHoursOT(calPerpersonRHoT.toFixed(2));
    setReducedHoursConsOT(calPerpersonRHConsoT.toFixed(2));
    setReducedHoursMdtOT(calPerpersonRHMdtoT.toFixed(2));
    setReducedHoursSecOT(calPerpersonRHSecoT.toFixed(2));
    //PE
    setReducedHoursPE(calPerpersonRHPE.toFixed(2));
    setReducedHoursConsPE(calPerpersonRHConsPE.toFixed(2));
    setReducedHoursMdtPE(calPerpersonRHMdtPE.toFixed(2));
    setReducedHoursSecPE(calPerpersonRHSecPE.toFixed(2));
    //PT
    setReducedHoursPT(calPerpersonRHPT.toFixed(2));
    setReducedHoursConsPT(calPerpersonRHConsPT.toFixed(2));
    setReducedHoursMdtPT(calPerpersonRHMdtPT.toFixed(2));
    setReducedHoursSecPT(calPerpersonRHSecPT.toFixed(2));
    //MDT
    setReducedHoursMDT(calPerpersonRHMDT.toFixed(2));
    setReducedHoursConsMDT(calPerpersonRHConsMDT.toFixed(2));
    setReducedHoursMdtMDT(calPerpersonRHMdtMDT.toFixed(2));
    setReducedHoursSecMDT(calPerpersonRHSecMDT.toFixed(2));
  };

  const calculateInitialHours = () => {
    const initialHoursCal =
      intialHours * 45 +
      intialHoursCons * 90 +
      intialHoursMdt * 22.5 +
      intialHoursSec * 22.5;
    setIntailHoursRes(initialHoursCal);
  };

  const calculateReducedHours = (val) => {
    const reducedHoursCal =
      reducedHours * 45 +
      reducedHoursCons * 90 +
      reducedHoursMdt * 22.5 +
      reducedHoursSec * 22.5;
    const newRes = val - reducedHoursCal;
    setReducedHoursRes(newRes);
  };

  // order test
  const calculateInitialHoursOT = () => {
    const initialHoursCalOT =
      intialHoursOT * 45 +
      intialHoursConsOT * 90 +
      intialHoursMdtOT * 22.5 +
      intialHoursSecOT * 22.5;
    const initialHoursCalPT =
      intialHoursPT * 45 +
      intialHoursConsPT * 90 +
      intialHoursMdtPT * 22.5 +
      intialHoursSecPT * 22.5;
    const initialHoursCalMDT =
      intialHoursMDT * 45 +
      intialHoursConsMDT * 90 +
      intialHoursMdtMDT * 22.5 +
      intialHoursSecMDT * 22.5;
    const initialHoursCalPE =
      intialHoursPE * 45 +
      intialHoursConsPE * 90 +
      intialHoursMdtPE * 22.5 +
      intialHoursSecPE * 22.5;
    setIntailHoursResOT(initialHoursCalOT);
    setIntailHoursResPT(initialHoursCalPT);
    setIntailHoursResMDT(initialHoursCalMDT);
    setIntailHoursResPE(initialHoursCalPE);
  };

  const calculateReducedHoursOT = (val) => {
    const reducedHoursCalOT =
      reducedHoursOT * 45 +
      reducedHoursConsOT * 90 +
      reducedHoursMdtOT * 22.5 +
      reducedHoursSecOT * 22.5;
    const newResOT = val - reducedHoursCalOT;
    setReducedHoursResOT(newResOT);
  };

  const calculateReducedHoursPT = (val) => {
    const reducedHoursCalPT =
      reducedHoursPT * 45 +
      reducedHoursConsPT * 90 +
      reducedHoursMdtPT * 22.5 +
      reducedHoursSecPT * 22.5;
    const newResPT = val - reducedHoursCalPT;
    setReducedHoursResPT(newResPT);
  };

  const calculateReducedHoursMDT = (val) => {
    const reducedHoursCalMDT =
      reducedHoursMDT * 45 +
      reducedHoursConsMDT * 90 +
      reducedHoursMdtMDT * 22.5 +
      reducedHoursSecMDT * 22.5;
    const newResMDT = val - reducedHoursCalMDT;
    setReducedHoursResMDT(newResMDT);
  };

  const calculateReducedHoursPE = (val) => {
    const reducedHoursCalPE =
      reducedHoursPE * 45 +
      reducedHoursConsPE * 90 +
      reducedHoursMdtPE * 22.5 +
      reducedHoursSecPE * 22.5;
    const newResPE = val - reducedHoursCalPE;
    setReducedHoursResPE(newResPE);
  };

  const calculateTotal = (a, b, c, d, e) => {
    const finalTotal = a + b + c + d + e;
    setTotal(finalTotal);
  };

  const calculateGradTotal = (a, b, c, d, e) => {
    let gradTotal = a + b + c + d + e;
    gradTotal *= 52;
    setGrandTotal(gradTotal);
  };

  const calculateAsisGradTotal = (a, b, c, d, e) => {
    let gradTotal = a + b + c + d + e;
    gradTotal *= 52;
    setGrandAsisTotal(gradTotal);
  };

  const calculatePSGradTotal = (a, b, c, d, e) => {
    let gradTotal = a + b + c + d + e;
    gradTotal *= 52;
    setGrandPSTotal(gradTotal);
  };

  const calculateBeforeSavingsTotal = (a, b, c, d, e) => {
    const BeforeSavings = a + b + c + d + e;
    setBeforeSavingsTotal(BeforeSavings);
  };

  const calculatePotenialSavingsTotal = (a, b, c, d, e) => {
    const potentialSavings = a + b + c + d + e;
    setPotenialSavingsTotal(potentialSavings);
  };

  const getSliderValue = (e, val) => {
    setPercentage(val);
  };
  const getSliderValueOT = (e, val) => {
    setPercentageOT(val);
  };
  const getSliderValuePT = (e, val) => {
    setPercentagePT(val);
  };
  const getSliderValueMDT = (e, val) => {
    setPercentageMDT(val);
  };
  const getSliderValuePE = (e, val) => {
    setPercentagePE(val);
  };

  useEffect(() => {
    calculate();
  });

  useEffect(() => {
    calculatePerPerson();
  });

  useEffect(() => {
    calculatePerPersonRH();
  });

  useEffect(() => {
    calculateInitialHours();
  });

  useEffect(() => {
    calculateReducedHours(intialHoursRes);
  });

  useEffect(() => {
    calculateOT();
    calculatePT();
    calculateMDT();
    calculatePE();
  });

  useEffect(() => {
    calculateReducedHoursOT(intialHoursResOT);
    calculateReducedHoursPT(intialHoursResPT);
    calculateReducedHoursMDT(intialHoursResMDT);
    calculateReducedHoursPE(intialHoursResPE);
  });

  useEffect(() => {
    calculateInitialHoursOT();
  });

  useEffect(() => {
    calculateTotal(result, resultOT, resultPT, resultMDT, resultPE);
    calculateGradTotal(result, resultOT, resultPT, resultMDT, resultPE);
    calculateAsisGradTotal(
      intialHoursRes,
      intialHoursResOT,
      intialHoursResPE,
      intialHoursResPT,
      intialHoursResMDT
    );
    calculatePSGradTotal(
      reducedHoursRes,
      reducedHoursResOT,
      reducedHoursResPT,
      reducedHoursResMDT,
      reducedHoursResPE
    );
    calculateBeforeSavingsTotal(
      intialHoursRes,
      intialHoursResOT,
      intialHoursResPT,
      intialHoursResMDT,
      intialHoursResPE
    );
    calculatePotenialSavingsTotal(
      reducedHoursRes,
      reducedHoursResOT,
      reducedHoursResPT,
      reducedHoursResMDT,
      reducedHoursResPE
    );
  });

  return (
    <>
      <NavBar />
      <Container fixed>
        <Grid container spacing={1} className={classes.grid}>
          <Grid item xs={12}>
            <h1>Number of Patients</h1>
            <TextField
              style={{ paddingRight: "10px" }}
              label="New Patients per week"
              type="number"
              variant="outlined"
              onChange={(e) => setNewPatients(e.target.value)}
            />
            <TextField
              label="New Patients per MDT"
              type="number"
              variant="outlined"
              onChange={(e) => setPerMdt(e.target.value)}
            />
          </Grid>
          <Grid item xs={12}>
            <h2>Referral Triage & Processing</h2>
          </Grid>
          <Grid container spacing={1} className={classes.grid}>
            <Grid item xs={3}>
              <Paper className={classes.paper}>
                <h3>CNS</h3>
                <Grid container spacing={1}>
                  <Grid container item xs={6} spacing={0}>
                    <TextField
                      style={{ paddingBottom: "10px" }}
                      label="Per Person"
                      type="number"
                      variant="outlined"
                      onChange={(e) => setPerPersonIH(e.target.value)}
                    />
                    <TextField
                      label="Per person"
                      type="number"
                      variant="outlined"
                      onChange={(e) => setPerPersonRH(e.target.value)}
                    />
                  </Grid>
                  <Grid container item xs={6} spacing={0}>
                    <TextField
                      label="Initial hours "
                      style={{ paddingBottom: "10px" }}
                      value={intialHours}
                      type="number"
                      variant="outlined"
                      onChange={(e) => setIntailHours(e.target.value)}
                    />
                    <TextField
                      label="Reduced hours "
                      type="number"
                      value={reducedHours}
                      variant="outlined"
                      onChange={(e) => setReducedHours(e.target.value)}
                    />
                  </Grid>
                </Grid>
              </Paper>
            </Grid>
            <Grid item xs={3}>
              <Paper className={classes.paper}>
                <h3>Consultant</h3>
                <Grid container spacing={1}>
                  <Grid container item xs={6} spacing={0}>
                    <TextField
                      style={{ paddingBottom: "10px" }}
                      label="Per Person"
                      type="number"
                      variant="outlined"
                      onChange={(e) => setPerPersonIHCons(e.target.value)}
                    />
                    <TextField
                      label="Per person"
                      type="number"
                      variant="outlined"
                      onChange={(e) => setPerPersonRHCons(e.target.value)}
                    />
                  </Grid>
                  <Grid container item xs={6} spacing={0}>
                    <TextField
                      style={{ paddingBottom: "10px" }}
                      label="Initial hours"
                      value={intialHoursCons}
                      type="number"
                      variant="outlined"
                      onChange={(e) => setIntailHoursCons(e.target.value)}
                    />
                    <TextField
                      label="Reduced hours"
                      value={reducedHoursCons}
                      type="number"
                      variant="outlined"
                      onChange={(e) => setReducedHoursCons(e.target.value)}
                    />
                  </Grid>
                </Grid>
              </Paper>
            </Grid>
            <Grid item xs={3}>
              <Paper className={classes.paper}>
                <h3>MDT Coordinator</h3>
                <Grid container spacing={1}>
                  <Grid container item xs={6} spacing={0}>
                    <TextField
                      style={{ paddingBottom: "10px" }}
                      label="Per Person"
                      type="number"
                      variant="outlined"
                      onChange={(e) => setPerPersonIHMdt(e.target.value)}
                    />
                    <TextField
                      label="Per person"
                      type="number"
                      variant="outlined"
                      onChange={(e) => setPerPersonRHMdt(e.target.value)}
                    />
                  </Grid>
                  <Grid container item xs={6} spacing={0}>
                    <TextField
                      style={{ paddingBottom: "10px" }}
                      label="Initial hours"
                      value={intialHoursMdt}
                      type="number"
                      variant="outlined"
                      onChange={(e) => setIntailHoursMdt(e.target.value)}
                    />
                    <TextField
                      label="Reduced hours"
                      value={reducedHoursMdt}
                      type="number"
                      variant="outlined"
                      onChange={(e) => setReducedHoursMdt(e.target.value)}
                    />
                  </Grid>
                </Grid>
              </Paper>
            </Grid>
            <Grid item xs={3}>
              <Paper className={classes.paper}>
                <h3>Other Admin</h3>
                <Grid container spacing={1}>
                  <Grid container item xs={6} spacing={0}>
                    <TextField
                      style={{ paddingBottom: "10px" }}
                      label="Per Person"
                      type="number"
                      variant="outlined"
                      onChange={(e) => setPerPersonIHSec(e.target.value)}
                    />
                    <TextField
                      label="Per person"
                      type="number"
                      variant="outlined"
                      onChange={(e) => setPerPersonRHSec(e.target.value)}
                    />
                  </Grid>
                  <Grid container item xs={6} spacing={0}>
                    <TextField
                      style={{ paddingBottom: "10px" }}
                      label="Initial hours"
                      value={intialHoursSec}
                      type="number"
                      variant="outlined"
                      onChange={(e) => setIntailHoursSec(e.target.value)}
                    />
                    <TextField
                      label="Reduced hours"
                      value={reducedHoursSec}
                      type="number"
                      variant="outlined"
                      onChange={(e) => setReducedHoursSec(e.target.value)}
                    />
                  </Grid>
                </Grid>
              </Paper>
            </Grid>
          </Grid>
          <Grid item xs={4}>
            <Paper className={classes.paper}>
              <div>
                <label style={{ marginTop: "0px" }}> As-Is: </label>£
                {intialHoursRes.toFixed(2) ? intialHoursRes.toFixed(2) : 0.0}
              </div>
              <div>
                <label style={{ marginTop: "0px" }}>
                  {" "}
                  Total potential savings:{" "}
                </label>
                £{reducedHoursRes.toFixed(2) ? reducedHoursRes.toFixed(2) : 0.0}
              </div>
            </Paper>
          </Grid>
          <Grid item xs={4}>
            <Paper className={classes.paper}>
              <Slider
                style={{ marginTop: "11px" }}
                defaultValue={0}
                max={41}
                valueLabelDisplay="on"
                onChange={getSliderValue}
              />
            </Paper>
          </Grid>
          <Grid item xs={4}>
            <Paper className={classes.paper} style={{ height: "43px" }}>
              <label style={{ marginTop: "11px" }}>
                Risk adjusted benefits:
              </label>
              £{result.toFixed(2) ? result.toFixed(2) : 0.0}
            </Paper>
          </Grid>
          <Grid item xs={12}>
            <h2>Requesting Tests</h2>
          </Grid>
          <Grid container spacing={1} className={classes.grid}>
            <Grid item xs={3}>
              <Paper className={classes.paper}>
                <h3>CNS</h3>
                <Grid container spacing={1}>
                  <Grid container item xs={6} spacing={0}>
                    <TextField
                      style={{ paddingBottom: "10px" }}
                      label="Per Person"
                      type="number"
                      variant="outlined"
                      onChange={(e) => setPerPersonIHOT(e.target.value)}
                    />
                    <TextField
                      style={{ paddingBottom: "10px" }}
                      label="Per person"
                      type="number"
                      variant="outlined"
                      onChange={(e) => setPerPersonRHOT(e.target.value)}
                    />
                  </Grid>
                  <Grid container item xs={6} spacing={0}>
                    <TextField
                      label="Initial hours"
                      value={intialHoursOT}
                      type="number"
                      variant="outlined"
                      onChange={(e) => setIntailHoursOT(e.target.value)}
                    />
                    <TextField
                      label="Reduced hours"
                      value={reducedHoursOT}
                      type="number"
                      variant="outlined"
                      onChange={(e) => setReducedHoursOT(e.target.value)}
                    />
                  </Grid>
                </Grid>
              </Paper>
            </Grid>
            <Grid item xs={3}>
              <Paper className={classes.paper}>
                <h3>Consultant</h3>
                <Grid container spacing={1}>
                  <Grid container item xs={6} spacing={0}>
                    <TextField
                      style={{ paddingBottom: "10px" }}
                      label="Per Person"
                      type="number"
                      variant="outlined"
                      onChange={(e) => setPerPersonIHConsOT(e.target.value)}
                    />
                    <TextField
                      style={{ paddingBottom: "10px" }}
                      label="Per person"
                      type="number"
                      variant="outlined"
                      onChange={(e) => setPerPersonRHConsOT(e.target.value)}
                    />
                  </Grid>
                  <Grid container item xs={6} spacing={0}>
                    <TextField
                      label="Initial hours"
                      value={intialHoursConsOT}
                      type="number"
                      variant="outlined"
                      onChange={(e) => setIntailHoursConsOT(e.target.value)}
                    />
                    <TextField
                      label="Reduced hours"
                      value={reducedHoursConsOT}
                      type="number"
                      variant="outlined"
                      onChange={(e) => setReducedHoursConsOT(e.target.value)}
                    />
                  </Grid>
                </Grid>
              </Paper>
            </Grid>
            <Grid item xs={3}>
              <Paper className={classes.paper}>
                <h3>MDT Coordinator</h3>
                <Grid container spacing={1}>
                  <Grid container item xs={6} spacing={0}>
                    <TextField
                      style={{ paddingBottom: "10px" }}
                      label="Per Person"
                      type="number"
                      variant="outlined"
                      onChange={(e) => setPerPersonIHMdtOT(e.target.value)}
                    />
                    <TextField
                      style={{ paddingBottom: "10px" }}
                      label="Per person"
                      type="number"
                      variant="outlined"
                      onChange={(e) => setPerPersonRHMdtOT(e.target.value)}
                    />
                  </Grid>
                  <Grid container item xs={6} spacing={0}>
                    <TextField
                      label="Initial hours"
                      value={intialHoursMdtOT}
                      type="number"
                      variant="outlined"
                      onChange={(e) => setIntailHoursMdtOT(e.target.value)}
                    />
                    <TextField
                      label="Reduced hours "
                      value={reducedHoursMdtOT}
                      type="number"
                      variant="outlined"
                      onChange={(e) => setReducedHoursMdtOT(e.target.value)}
                    />
                  </Grid>
                </Grid>
              </Paper>
            </Grid>
            <Grid item xs={3}>
              <Paper className={classes.paper}>
                <h3>Other Admin</h3>
                <Grid container spacing={1}>
                  <Grid container item xs={6} spacing={0}>
                    <TextField
                      style={{ paddingBottom: "10px" }}
                      label="Per Person"
                      type="number"
                      variant="outlined"
                      onChange={(e) => setPerPersonIHSecOT(e.target.value)}
                    />
                    <TextField
                      style={{ paddingBottom: "10px" }}
                      label="Per person"
                      type="number"
                      variant="outlined"
                      onChange={(e) => setPerPersonRHSecOT(e.target.value)}
                    />
                  </Grid>
                  <Grid container item xs={6} spacing={0}>
                    <TextField
                      label="Initial hours "
                      value={intialHoursSecOT}
                      type="number"
                      variant="outlined"
                      onChange={(e) => setIntailHoursSecOT(e.target.value)}
                    />
                    <TextField
                      label="Reduced hours "
                      value={reducedHoursSecOT}
                      type="number"
                      variant="outlined"
                      onChange={(e) => setReducedHoursSecOT(e.target.value)}
                    />
                  </Grid>
                </Grid>
              </Paper>
            </Grid>
          </Grid>
          <Grid item xs={4}>
            <Paper className={classes.paper}>
              <div>
                <label style={{ marginTop: "0px" }}> As-Is: </label>£
                {intialHoursResOT.toFixed(2)
                  ? intialHoursResOT.toFixed(2)
                  : 0.0}
              </div>
              <div>
                <label style={{ marginTop: "0px" }}>
                  {" "}
                  Total potential savings:{" "}
                </label>
                £
                {reducedHoursResOT.toFixed(2)
                  ? reducedHoursResOT.toFixed(2)
                  : 0.0}
              </div>
            </Paper>
          </Grid>
          <Grid item xs={4}>
            <Paper className={classes.paper}>
              <Slider
                style={{ marginTop: "11px" }}
                defaultValue={0}
                max={41}
                valueLabelDisplay="on"
                onChange={getSliderValueOT}
              />
            </Paper>
          </Grid>
          <Grid item xs={4}>
            <Paper className={classes.paper} style={{ height: "43px" }}>
              <label style={{ marginTop: "11px" }}>
                Risk adjusted benefits:
              </label>
              £{resultOT.toFixed(2) ? resultOT.toFixed(2) : 0.0}
            </Paper>
          </Grid>
          <Grid item xs={12}>
            <h2>Patient Encounter</h2>
          </Grid>
          <Grid container spacing={1} className={classes.grid}>
            <Grid item xs={3}>
              <Paper className={classes.paper}>
                <h3>CNS</h3>
                <Grid container spacing={1}>
                  <Grid container item xs={6} spacing={0}>
                    <TextField
                      style={{ paddingBottom: "10px" }}
                      label="Per Person"
                      type="number"
                      variant="outlined"
                      onChange={(e) => setPerPersonIHPE(e.target.value)}
                    />
                    <TextField
                      style={{ paddingBottom: "10px" }}
                      label="Per person"
                      type="number"
                      variant="outlined"
                      onChange={(e) => setPerPersonRHPE(e.target.value)}
                    />
                  </Grid>
                  <Grid container item xs={6} spacing={0}>
                    <TextField
                      label="Initial hours"
                      value={intialHoursPE}
                      type="number"
                      variant="outlined"
                      onChange={(e) => setIntailHoursPE(e.target.value)}
                    />
                    <TextField
                      label="Reduced hours"
                      value={reducedHoursPE}
                      type="number"
                      variant="outlined"
                      onChange={(e) => setReducedHoursPE(e.target.value)}
                    />
                  </Grid>
                </Grid>
              </Paper>
            </Grid>
            <Grid item xs={3}>
              <Paper className={classes.paper}>
                <h3>Consultant</h3>
                <Grid container spacing={1}>
                  <Grid container item xs={6} spacing={0}>
                    <TextField
                      style={{ paddingBottom: "10px" }}
                      label="Per Person"
                      type="number"
                      variant="outlined"
                      onChange={(e) => setPerPersonIHConsPE(e.target.value)}
                    />
                    <TextField
                      style={{ paddingBottom: "10px" }}
                      label="Per person"
                      type="number"
                      variant="outlined"
                      onChange={(e) => setPerPersonRHConsPE(e.target.value)}
                    />
                  </Grid>
                  <Grid container item xs={6} spacing={0}>
                    <TextField
                      label="Initial hours"
                      value={intialHoursConsPE}
                      type="number"
                      variant="outlined"
                      onChange={(e) => setIntailHoursConsPE(e.target.value)}
                    />
                    <TextField
                      label="Reduced hours"
                      value={reducedHoursConsPE}
                      type="number"
                      variant="outlined"
                      onChange={(e) => setReducedHoursConsPE(e.target.value)}
                    />
                  </Grid>
                </Grid>
              </Paper>
            </Grid>
            <Grid item xs={3}>
              <Paper className={classes.paper}>
                <h3>MDT Coordinator</h3>
                <Grid container spacing={1}>
                  <Grid container item xs={6} spacing={0}>
                    <TextField
                      style={{ paddingBottom: "10px" }}
                      label="Per Person"
                      type="number"
                      variant="outlined"
                      onChange={(e) => setPerPersonIHMdtPE(e.target.value)}
                    />
                    <TextField
                      style={{ paddingBottom: "10px" }}
                      label="Per person"
                      type="number"
                      variant="outlined"
                      onChange={(e) => setPerPersonRHMdtPE(e.target.value)}
                    />
                  </Grid>
                  <Grid container item xs={6} spacing={0}>
                    <TextField
                      label="Initial hours"
                      value={intialHoursMdtPE}
                      type="number"
                      variant="outlined"
                      onChange={(e) => setIntailHoursMdtPE(e.target.value)}
                    />
                    <TextField
                      label="Reduced hours "
                      value={reducedHoursMdtPE}
                      type="number"
                      variant="outlined"
                      onChange={(e) => setReducedHoursMdtPE(e.target.value)}
                    />
                  </Grid>
                </Grid>
              </Paper>
            </Grid>
            <Grid item xs={3}>
              <Paper className={classes.paper}>
                <h3>Other Admin</h3>
                <Grid container spacing={1}>
                  <Grid container item xs={6} spacing={0}>
                    <TextField
                      style={{ paddingBottom: "10px" }}
                      label="Per Person"
                      type="number"
                      variant="outlined"
                      onChange={(e) => setPerPersonIHSecPE(e.target.value)}
                    />
                    <TextField
                      style={{ paddingBottom: "10px" }}
                      label="Per person"
                      type="number"
                      variant="outlined"
                      onChange={(e) => setPerPersonRHSecPE(e.target.value)}
                    />
                  </Grid>
                  <Grid container item xs={6} spacing={0}>
                    <TextField
                      label="Initial hours "
                      value={intialHoursSecPE}
                      type="number"
                      variant="outlined"
                      onChange={(e) => setIntailHoursSecPE(e.target.value)}
                    />
                    <TextField
                      label="Reduced hours "
                      value={reducedHoursSecPE}
                      type="number"
                      variant="outlined"
                      onChange={(e) => setReducedHoursSecPE(e.target.value)}
                    />
                  </Grid>
                </Grid>
              </Paper>
            </Grid>
          </Grid>
          <Grid item xs={4}>
            <Paper className={classes.paper}>
              <div>
                <label style={{ marginTop: "0px" }}> As-Is: </label>£
                {intialHoursResPE.toFixed(2)
                  ? intialHoursResPE.toFixed(2)
                  : 0.0}
              </div>
              <div>
                <label style={{ marginTop: "0px" }}>
                  {" "}
                  Total potential savings:{" "}
                </label>
                £
                {reducedHoursResPE.toFixed(2)
                  ? reducedHoursResPE.toFixed(2)
                  : 0.0}
              </div>
            </Paper>
          </Grid>
          <Grid item xs={4}>
            <Paper className={classes.paper}>
              <Slider
                style={{ marginTop: "11px" }}
                defaultValue={0}
                max={41}
                valueLabelDisplay="on"
                onChange={getSliderValuePE}
              />
            </Paper>
          </Grid>
          <Grid item xs={4}>
            <Paper className={classes.paper} style={{ height: "43px" }}>
              <label style={{ marginTop: "11px" }}>
                Risk adjusted benefits:
              </label>
              £{resultPE.toFixed(2) ? resultPE.toFixed(2) : 0.0}
            </Paper>
          </Grid>

          <Grid item xs={12}>
            <h2>Pathway Tracking</h2>
          </Grid>
          <Grid container spacing={1} className={classes.grid}>
            <Grid item xs={3}>
              <Paper className={classes.paper}>
                <h3>CNS</h3>
                <Grid container spacing={1}>
                  <Grid container item xs={6} spacing={0}>
                    <TextField
                      style={{ paddingBottom: "10px" }}
                      label="Per Person"
                      type="number"
                      variant="outlined"
                      onChange={(e) => setPerPersonIHPT(e.target.value)}
                    />
                    <TextField
                      style={{ paddingBottom: "10px" }}
                      label="Per person"
                      type="number"
                      variant="outlined"
                      onChange={(e) => setPerPersonRHPT(e.target.value)}
                    />
                  </Grid>
                  <Grid container item xs={6} spacing={0}>
                    <TextField
                      label="Initial hours"
                      value={intialHoursPT}
                      type="number"
                      variant="outlined"
                      onChange={(e) => setIntailHoursPT(e.target.value)}
                    />
                    <TextField
                      label="Reduced hours"
                      value={reducedHoursPT}
                      type="number"
                      variant="outlined"
                      onChange={(e) => setReducedHoursPT(e.target.value)}
                    />
                  </Grid>
                </Grid>
              </Paper>
            </Grid>
            <Grid item xs={3}>
              <Paper className={classes.paper}>
                <h3>Consultant</h3>
                <Grid container spacing={1}>
                  <Grid container item xs={6} spacing={0}>
                    <TextField
                      style={{ paddingBottom: "10px" }}
                      label="Per Person"
                      type="number"
                      variant="outlined"
                      onChange={(e) => setPerPersonIHConsPT(e.target.value)}
                    />
                    <TextField
                      style={{ paddingBottom: "10px" }}
                      label="Per person"
                      type="number"
                      variant="outlined"
                      onChange={(e) => setPerPersonRHConsPT(e.target.value)}
                    />
                  </Grid>
                  <Grid container item xs={6} spacing={0}>
                    <TextField
                      label="Initial hours"
                      value={intialHoursConsPT}
                      type="number"
                      variant="outlined"
                      onChange={(e) => setIntailHoursConsPT(e.target.value)}
                    />
                    <TextField
                      label="Reduced hours"
                      value={reducedHoursConsPT}
                      type="number"
                      variant="outlined"
                      onChange={(e) => setReducedHoursConsPT(e.target.value)}
                    />
                  </Grid>
                </Grid>
              </Paper>
            </Grid>
            <Grid item xs={3}>
              <Paper className={classes.paper}>
                <h3>MDT Coordinator</h3>
                <Grid container spacing={1}>
                  <Grid container item xs={6} spacing={0}>
                    <TextField
                      style={{ paddingBottom: "10px" }}
                      label="Per Person"
                      type="number"
                      variant="outlined"
                      onChange={(e) => setPerPersonIHMdtPT(e.target.value)}
                    />
                    <TextField
                      style={{ paddingBottom: "10px" }}
                      label="Per person"
                      type="number"
                      variant="outlined"
                      onChange={(e) => setPerPersonRHMdtPT(e.target.value)}
                    />
                  </Grid>
                  <Grid container item xs={6} spacing={0}>
                    <TextField
                      label="Initial hours"
                      value={intialHoursMdtPT}
                      type="number"
                      variant="outlined"
                      onChange={(e) => setIntailHoursMdtPT(e.target.value)}
                    />
                    <TextField
                      label="Reduced hours "
                      value={reducedHoursMdtPT}
                      type="number"
                      variant="outlined"
                      onChange={(e) => setReducedHoursMdtPT(e.target.value)}
                    />
                  </Grid>
                </Grid>
              </Paper>
            </Grid>
            <Grid item xs={3}>
              <Paper className={classes.paper}>
                <h3>Other Admin</h3>
                <Grid container spacing={1}>
                  <Grid container item xs={6} spacing={0}>
                    <TextField
                      style={{ paddingBottom: "10px" }}
                      label="Per Person"
                      type="number"
                      variant="outlined"
                      onChange={(e) => setPerPersonIHSecPT(e.target.value)}
                    />
                    <TextField
                      style={{ paddingBottom: "10px" }}
                      label="Per person"
                      type="number"
                      variant="outlined"
                      onChange={(e) => setPerPersonRHSecPT(e.target.value)}
                    />
                  </Grid>
                  <Grid container item xs={6} spacing={0}>
                    <TextField
                      label="Initial hours "
                      value={intialHoursSecPT}
                      type="number"
                      variant="outlined"
                      onChange={(e) => setIntailHoursSecPT(e.target.value)}
                    />
                    <TextField
                      label="Reduced hours "
                      value={reducedHoursSecPT}
                      type="number"
                      variant="outlined"
                      onChange={(e) => setReducedHoursSecPT(e.target.value)}
                    />
                  </Grid>
                </Grid>
              </Paper>
            </Grid>
          </Grid>
          <Grid item xs={4}>
            <Paper className={classes.paper}>
              <div>
                <label style={{ marginTop: "0px" }}> As-Is: </label>£
                {intialHoursResPT.toFixed(2)
                  ? intialHoursResPT.toFixed(2)
                  : 0.0}
              </div>
              <div>
                <label style={{ marginTop: "0px" }}>
                  {" "}
                  Total potential savings:{" "}
                </label>
                £
                {reducedHoursResPT.toFixed(2)
                  ? reducedHoursResPT.toFixed(2)
                  : 0.0}
              </div>
            </Paper>
          </Grid>
          <Grid item xs={4}>
            <Paper className={classes.paper}>
              <Slider
                style={{ marginTop: "11px" }}
                defaultValue={0}
                max={41}
                valueLabelDisplay="on"
                onChange={getSliderValuePT}
              />
            </Paper>
          </Grid>
          <Grid item xs={4}>
            <Paper className={classes.paper} style={{ height: "43px" }}>
              <label style={{ marginTop: "11px" }}>
                Risk adjusted benefits:
              </label>
              £{resultPT.toFixed(2) ? resultPT.toFixed(2) : 0.0}
            </Paper>
          </Grid>
          <Grid item xs={12}>
            <h2>MDT Preparation</h2>
          </Grid>
          <Grid container spacing={1} className={classes.grid}>
            <Grid item xs={3}>
              <Paper className={classes.paper}>
                <h3>CNS</h3>
                <Grid container spacing={1}>
                  <Grid container item xs={6} spacing={0}>
                    <TextField
                      style={{ paddingBottom: "10px" }}
                      label="Per Person"
                      type="number"
                      variant="outlined"
                      onChange={(e) => setPerPersonIHMDT(e.target.value)}
                    />
                    <TextField
                      style={{ paddingBottom: "10px" }}
                      label="Per person"
                      type="number"
                      variant="outlined"
                      onChange={(e) => setPerPersonRHMDT(e.target.value)}
                    />
                  </Grid>
                  <Grid container item xs={6} spacing={0}>
                    <TextField
                      label="Initial hours"
                      value={intialHoursMDT}
                      type="number"
                      variant="outlined"
                      onChange={(e) => setIntailHoursMDT(e.target.value)}
                    />
                    <TextField
                      label="Reduced hours"
                      value={reducedHoursMDT}
                      type="number"
                      variant="outlined"
                      onChange={(e) => setReducedHoursMDT(e.target.value)}
                    />
                  </Grid>
                </Grid>
              </Paper>
            </Grid>
            <Grid item xs={3}>
              <Paper className={classes.paper}>
                <h3>Consultant</h3>
                <Grid container spacing={1}>
                  <Grid container item xs={6} spacing={0}>
                    <TextField
                      style={{ paddingBottom: "10px" }}
                      label="Per Person"
                      type="number"
                      variant="outlined"
                      onChange={(e) => setPerPersonIHConsMDT(e.target.value)}
                    />
                    <TextField
                      style={{ paddingBottom: "10px" }}
                      label="Per person"
                      type="number"
                      variant="outlined"
                      onChange={(e) => setPerPersonRHConsMDT(e.target.value)}
                    />
                  </Grid>
                  <Grid container item xs={6} spacing={0}>
                    <TextField
                      label="Initial hours"
                      value={intialHoursConsMDT}
                      type="number"
                      variant="outlined"
                      onChange={(e) => setIntailHoursConsMDT(e.target.value)}
                    />
                    <TextField
                      label="Reduced hours"
                      value={reducedHoursConsMDT}
                      type="number"
                      variant="outlined"
                      onChange={(e) => setReducedHoursConsMDT(e.target.value)}
                    />
                  </Grid>
                </Grid>
              </Paper>
            </Grid>
            <Grid item xs={3}>
              <Paper className={classes.paper}>
                <h3>MDT Coordinator</h3>
                <Grid container spacing={1}>
                  <Grid container item xs={6} spacing={0}>
                    <TextField
                      style={{ paddingBottom: "10px" }}
                      label="Per Person"
                      type="number"
                      variant="outlined"
                      onChange={(e) => setPerPersonIHMdtMDT(e.target.value)}
                    />
                    <TextField
                      style={{ paddingBottom: "10px" }}
                      label="Per person"
                      type="number"
                      variant="outlined"
                      onChange={(e) => setPerPersonRHMdtMDT(e.target.value)}
                    />
                  </Grid>
                  <Grid container item xs={6} spacing={0}>
                    <TextField
                      label="Initial hours"
                      value={intialHoursMdtMDT}
                      type="number"
                      variant="outlined"
                      onChange={(e) => setIntailHoursMdtMDT(e.target.value)}
                    />
                    <TextField
                      label="Reduced hours "
                      value={reducedHoursMdtMDT}
                      type="number"
                      variant="outlined"
                      onChange={(e) => setReducedHoursMdtMDT(e.target.value)}
                    />
                  </Grid>
                </Grid>
              </Paper>
            </Grid>
            <Grid item xs={3}>
              <Paper className={classes.paper}>
                <h3>Other Admin</h3>
                <Grid container spacing={1}>
                  <Grid container item xs={6} spacing={0}>
                    <TextField
                      style={{ paddingBottom: "10px" }}
                      label="Per Person"
                      type="number"
                      variant="outlined"
                      onChange={(e) => setPerPersonIHSecMDT(e.target.value)}
                    />
                    <TextField
                      style={{ paddingBottom: "10px" }}
                      label="Per person"
                      type="number"
                      variant="outlined"
                      onChange={(e) => setPerPersonRHSecMDT(e.target.value)}
                    />
                  </Grid>
                  <Grid container item xs={6} spacing={0}>
                    <TextField
                      label="Initial hours "
                      value={intialHoursSecMDT}
                      type="number"
                      variant="outlined"
                      onChange={(e) => setIntailHoursSecMDT(e.target.value)}
                    />
                    <TextField
                      label="Reduced hours "
                      value={reducedHoursSecMDT}
                      type="number"
                      variant="outlined"
                      onChange={(e) => setReducedHoursSecMDT(e.target.value)}
                    />
                  </Grid>
                </Grid>
              </Paper>
            </Grid>
          </Grid>
          <Grid item xs={4}>
            <Paper className={classes.paper}>
              <div>
                <label style={{ marginTop: "0px" }}> As-Is: </label>£
                {intialHoursResMDT.toFixed(2)
                  ? intialHoursResMDT.toFixed(2)
                  : 0.0}
              </div>
              <div>
                <label style={{ marginTop: "0px" }}>
                  {" "}
                  Total potential savings:{" "}
                </label>
                £
                {reducedHoursResMDT.toFixed(2)
                  ? reducedHoursResMDT.toFixed(2)
                  : 0.0}
              </div>
            </Paper>
          </Grid>
          <Grid item xs={4}>
            <Paper className={classes.paper}>
              <Slider
                style={{ marginTop: "11px" }}
                defaultValue={0}
                max={41}
                valueLabelDisplay="on"
                onChange={getSliderValueMDT}
              />
            </Paper>
          </Grid>
          <Grid item xs={4}>
            <Paper className={classes.paper} style={{ height: "43px" }}>
              <label style={{ marginTop: "11px" }}>
                Risk adjusted benefits:
              </label>
              £{resultMDT.toFixed(2) ? resultMDT.toFixed(2) : 0.0}
            </Paper>
          </Grid>

          <Grid container spacing={1} className={classes.grid}>
            <Grid item xs={12}>
              <h2 style={{ float: "right" }}>Total: £{total.toFixed(2)}</h2>
              <h2 style={{ float: "right", paddingRight: "50px" }}>
                Potential savings: £{potenialSavingsTotal.toFixed(2)}
              </h2>
              <h2 style={{ float: "right", paddingRight: "20px" }}>
                As-Is: £{BeforeSavingsTotal.toFixed(2)}
              </h2>
            </Grid>
            <Grid item xs={12}>
              <h2 style={{ float: "right" }}>
                Grand Total: £{grandTotal.toFixed(2)}
              </h2>
              <h2 style={{ float: "right", paddingRight: "50px" }}>
                Potential savings Grand Total: £{grandPSTotal.toFixed(2)}
              </h2>
              <h2 style={{ float: "right", paddingRight: "20px" }}>
                As-Is Grand Total: £{grandAsiisTotal.toFixed(2)}
              </h2>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </>
  );
}

export default App;
