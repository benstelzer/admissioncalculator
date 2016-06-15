import * as express from "express";
import {IUserModel, User} from "./user.model";

let satOld = ["--Select--","2400","2390","2380","2370","2360","2350","2340","2330","2320","2310","2300","2290","2280","2270","2260","2250","2240","2230","2220","2210","2200","2190","2180",
"2170","2160","2150","2140","2130","2120","2110","2100","2090","2080","2070","2060","2050","2040","2030","2020","2010","2000","1990","1980","1970","1960","1950","1940","1930",
"1920","1910","1900","1890","1880","1870","1860","1850","1840","1830","1820","1810","1800","1790","1780","1770","1760","1750","1740","1730","1720","1710","1700","1690","1680",
"1670","1660","1650","1640","1630","1620","1610",,"1600","1590","1580","1570","1560","1550","1540","1530","1520","1510","1500","1490","1480","1470","1460","1450","1440","1430",
"1420","1410","1400","1390","1380","1370","1360","1350","1340","1330","1320","1310","1300","1290","1280","1270","1260","1250","1240","1230","1220","1210","1200","1190","1180",
"1170","1160","1150","1140","1130","1120","1110","1100","1090","1080","1070","1060","1050","1040","1030","1020","1010","1000","990","980","970","960","950","940","930",
"920","910","900","890","880","870","860","850","840","830","820","810","800","790","780","770","760","750","740","730","720","710","700","690","680",
"670","660","650","640","630","620","610","600"];

let satOldScore = [0,10,10,10,10,10,10,9.5,9.5,9.5,9.5,9.5,9,9,9,9,9,8.5,8.5,8.5,8.5,8.5,8,8,8,8,8,7.5,7.5,7.5,7.5,7.5,7,7,7,7,7,6.5,6.5,6.5,6.5,6.5,6.5,6.5,6.5,6.5,6.5,
6,6,6,6,6,5.8,5.8,5.8,5.8,5.8,5.8,5.8,5.8,5.8,5.8,5.5,5.5,5.5,5.5,5.5,5.5,5.5,5.5,5.5,5.5,5,5,5,5,5,5,5,5,5,5,4.5,4.5,4.5,4.5,4.5,4.5,4.5,4.5,4.5,4.5,4,4,4,4,4,4,
4,4,4,4,4,4,4,4,4,4,4,4,4,4,3.5,3.5,3.5,3.5,3.5,3.5,3.5,3.5,3.5,3.5,3.5,3.5,3.5,3.5,3.5,3.5,3.5,3.5,3.5,3.5,3.5,3.5,3.5,3.5,3.5,3.5,3.5,3.5,3.5,3.5,3,3,3,3,3,3,3,
3,3,3,2.5,2.5,2.5,2.5,2.5,2.5,2.5,2.5,2.5,2.5,2,2,2,2,2,2,2,2,2,2,1,1,1,1,1,1,1,1,1,1,1];

let satNew = ["--Select--","1600","1590","1580","1570","1560","1550","1540","1530","1520","1510","1500","1490","1480","1470","1460","1450","1440","1430","1420","1410",
"1400","1390","1380","1370","1360","1350","1340","1330","1320","1310","1300","1290","1280","1270","1260","1250","1240","1230","1220","1210","1200","1190","1180","1170","1160",
"1150","1140","1130","1120","1110","1100","1090","1080","1070","1060","1050","1040","1030","1020","1010","1000","990","980","970","960","950","940","930","920","910",
"900","890","880","870","860","850","840","830","820","810","800",
"790","780","770","760","750","740","730","720","710","700","690","680","670","660","650","640","630","620","610","600","590","580","570","560","550"
,"540","530","520","510","500","490","480","470","460","450","440","430","420","410","400"];

let satNewScore = [0,10,10,10,10,9.5,9.5,9.5,9,9,9,9,8.5,8.5,8.5,8.5,8,8,8,8,7.5,7.5,7.5,7.5,7,7,7,7,6.5,6.5,6.5,6.5,6,6,6,6,5.8,5.8,5.8,5.8,5.8,5.8,5.5,5.5,5.5,5.5,5.5,
5.5,5.5,5.5,5,5,5,5,5,5,5,5,4.5,4.5,4.5,4.5,4.5,4.5,4.5,4,4,4,4,4,4,4,4,4,4,4,3.5,3.5,3.5,3.5,3.5,3.5,3.5,3.5,3.5,3.5,3.5,3.5,3.5,3.5,3.5,3.5,3.5,3.5,3.5,3.5,3,
3,3,3,3,3,2.5,2.5,2.5,2.5,2,2,2,2,2,1.5,1.5,1.5,1.5,1.5,1,1,1,1,1,1];

let act = ["--Select--","36","35","34","33","32","31","30","29","28","27","26","25","24","23","22","21","20","19","18","17","16","15","14",
"13","12","11","10","9","8","7","6","5","4","3","2","1"];

let actScore = [0,10,9.5,9,8.5,8,7.5,7,6.5,6.5,6,5.8,5.5,5.5,5,4.5,4.5,4,4,3.5,3.5,3.5,3,3,3,2.5,2.5,2.5,2,2,2,1.5,1.5,1.5,1,1,1];

let satTwo = ["--Select--","1600","1590","1580","1570","1560","1550","1540","1530","1520","1510","1500","1490","1480","1470","1460","1450","1440","1430","1420","1410",
"1400","1390","1380","1370","1360","1350","1340","1330","1320","1310","1300","1290","1280","1270","1260","1250","1240","1230","1220","1210","1200","1190","1180","1170","1160",
"1150","1140","1130","1120","1110","1100","1090","1080","1070","1060","1050","1040","1030","1020","1010","1000","990","980","970","960","950","940","930","920","910",
"900","890","880","870","860","850","840","830","820","810","800",
"790","780","770","760","750","740","730","720","710","700","690","680","670","660","650","640","630","620","610","600","590","580","570","560","550"
,"540","530","520","510","500","490","480","470","460","450","440","430","420","410","400"];

let satTwoScore = [0,10,10,10,10,9.5,9.5,9.5,9,9,9,9,8.5,8.5,8.5,8.5,8,8,8,8,7.5,7.5,7.5,7.5,7,7,7,7,6.5,6.5,6.5,6.5,6,6,6,6,5.8,5.8,5.8,5.8,5.8,5.8,5.5,5.5,5.5,5.5,5.5,
5.5,5.5,5.5,5,5,5,5,5,5,5,5,4.5,4.5,4.5,4.5,4.5,4.5,4.5,4,4,4,4,4,4,4,4,4,4,4,3.5,3.5,3.5,3.5,3.5,3.5,3.5,3.5,3.5,3.5,3.5,3.5,3.5,3.5,3.5,3.5,3.5,3.5,3.5,3.5,3,
3,3,3,3,3,2.5,2.5,2.5,2.5,2,2,2,2,2,1.5,1.5,1.5,1.5,1.5,1,1,1,1,1,1];

let rank =["1-2%","2-5%","5-10%","10-15%","15-20%","20-25%","25-30%","30-35%","35-40%","40-45%","45-50%","50-55%","55-60%","60-65%","65-70%","70-75%","75-80%","80-85%","85-90%","90-95%","95-100%"];

let rankScore = [10,9.5,9,8.5,8,7,6.5,6,5.5,5.5,5,5,4.5,4.5,4,3.5,3,2.5,2,1.5,1];

let gpa = ["4.0","3.95 - 3.99","3.90 - 3.94","3.85 - 3.89","3.80 - 3.84","3.75 - 3.79", "3.70 - 3.74","3.65 - 3.69","3.60 - 3.64","3.55 - 3.59","3.50 - 3.54","3.45 - 3.49","3.40 - 3.44","3.35 - 3.39","3.30 - 3.34",
"3.25 - 3.29","3.20 - 3.24","3.15 - 3.19","3.10 - 3.14","3.05 - 3.09","3.00 - 3.04", "2.95 - 2.99","2.90 - 2.94", "2.80 - 2.84", "2.75 - 2.79","2.70 - 2.74", "2.65 - 2.69","2.60 - 2.64","2.55 - 2.59","2.50 - 2.54",
"2.45 - 2.49","2.40 - 2.44","2.35 - 2.39","2.30 - 2.34","2.25 - 2.29","2.20 - 2.24", "2.15 - 2.19","2.10 - 2.14","2.05 - 2.09","2.00 - 2.04","1.95 - 1.99","1.90 - 1.94",
"1.85 - 1.89","1.80 - 1.84","1.75 - 1.79","1.70 - 1.74", "1.65 - 1.69","1.60 - 1.64", "1.55 - 1.59","1.50 - 1.54","1.45 - 1.49", "1.40 - 1.44","1.35 - 1.39","1.30 - 1.34",
"1.25 - 1.29","1.20 - 1.24","1.15 - 1.19","1.10 - 1.14","1.05 - 1.09","1.00 - 1.04"];

let gpaScore = [10,9.5,9,8.5,8,7.5,7,7,6.5,6.5,6,6,6,5.5,5.5,5,5,5,5,4.5,4.5,4.5,4,4,4,4,3.5,3.5,3.5,3.5,3,3,3,3,2.5,2.5,2.5,2.5,2.5,2.5,2,2,2,2,2,2,
1.5,1.5,1.5,1.5,1.5,1.5,1.5,1,1,1,1,1,1,1];

let essay = [10,9,8,7,6,5,4,3,2,1];

let teacher = [10,9,8,7,6,5,4,3,2,1];

let interview = [10,9,8,7,6,5,4,3,2,1];

let extracurricular = [10,9,8,7,6,5,4,3,2,1];

let courseLoad = [10,9,8,7,6,5,4,3,2,1];

let legacy =["Yes", "No"];

let legacyScore = [10,0]

let firstGen = ["Yes", "No"];

let firstGenScore = [10,0]

let sport = ["Varsity", "Junior Varsity", "Intramural", "None"];

let sportScore = [10,6,4,0];

let school =["Stanford", "Harvard", "Yale"];

let schoolUrl = ["http://vignette2.wikia.nocookie.net/collegefootballmania/images/c/c2/Stanford_plain_block_%22S%22_logo.png/revision/latest?cb=20120928150306", "https://upload.wikimedia.org/wikipedia/en/thumb/3/3a/Harvard_Wreath_Logo_1.svg/1051px-Harvard_Wreath_Logo_1.svg.png", "http://www.zanda.com/resources/item/24010530000058/1024x768/Yale_University_logo.jpg"]

let schoolMultiplier = [0.5, 0.52, 0.6];



export function getAll (req: express.Request, res: express.Response, next) {
User.find({}).exec((err, data) => {

  if(err) return next(err);
  res.json(data)
})

};
export function create (req: express.Request, res: express.Response, next) {

let scoreOne = satOldScore[satOld.indexOf(req.body.satOld)] * 24;
let satOldParse = parseInt(req.body.satOld)
let satNewParse = parseInt(req.body.satNew)
let satTwoParse = parseInt(req.body.satTwo)
let actParse = parseInt(req.body.act)
let scoreTwo = satNewScore[satNew.indexOf(req.body.satNew)] * 24;
let scoreThree =actScore[act.indexOf(req.body.act)] * 24;
let scoreFour = satTwoScore[satTwo.indexOf(req.body.satTwo)] * 5;
let scoreFive = rankScore[rank.indexOf(req.body.rank)] * 6;
let scoreSix = gpaScore[gpa.indexOf(req.body.gpa)] * 6;
let scoreSeven = sportScore[sport.indexOf(req.body.sport)] * 6;
let scoreEight = legacyScore[legacy.indexOf(req.body.legacy)] * 6;
let scoreNine = firstGenScore[firstGen.indexOf(req.body.firstGen)] * 5 ;
let scoreTen = parseInt(req.body.interview) * 1;
let scoreEleven = parseInt(req.body.course) * 5;
let scoreTwelve = parseInt(req.body.essay) * 22;
let scoreThirteen = parseInt(req.body.recommendation) * 4;
let scoreFourteen = parseInt(req.body.extra) * 7;
let multiple = schoolMultiplier[school.indexOf(req.body.school)];
let Url = schoolUrl[school.indexOf(req.body.school)]
let scoreSum;


if (scoreOne >= scoreTwo && scoreOne >= scoreThree)

{ scoreSum = Math.round((( scoreOne +  scoreFour + scoreFive + scoreSix + scoreSeven + scoreEight + scoreNine + scoreTen + scoreEleven + scoreTwelve + scoreThirteen + scoreFourteen) * multiple)/10);
}

else if (scoreTwo >= scoreOne && scoreTwo >= scoreThree)

{ scoreSum = Math.round((( scoreTwo +  scoreFour + scoreFive + scoreSix + scoreSeven + scoreEight + scoreNine + scoreTen + scoreEleven + scoreTwelve + scoreThirteen + scoreFourteen) * multiple)/10);
}

else if (scoreThree >= scoreTwo && scoreThree >= scoreOne)

{ scoreSum = Math.round((( scoreThree +  scoreFour + scoreFive + scoreSix + scoreSeven + scoreEight + scoreNine + scoreTen + scoreEleven + scoreTwelve + scoreThirteen + scoreFourteen) * multiple)/10);
}

let person_data = {
  school: req.body.school,
  satOld: satOldParse,
  satNew: satNewParse,
  satTwo: satTwoParse,
  act: actParse,
  rank: req.body.rank,
  gpa: req.body.gpa,
  sport: req.body.sport,
  legacy: req.body.legacy,
  firstGen: req.body.firstGen,
  interview: req.body.interview,
  course: req.body.course,
  essay: req.body.essay,
  recommendation: req.body.recommendation,
  extra: req.body.extra,
  scoreSum: scoreSum,
  schoolUrl: Url
};

var person = new User(person_data);

person.save( function(error, person){
    if(error){
        res.json(error);
    }
    else{
        res.json(person);
    }
});

}

export function getOne(req: express.Request, res: express.Response, next) {
User.findOne({_id: req.params.id}).exec((err,p) => {
  if(err) return next(err);
  if(!p) return res.sendStatus(404);
  res.json(p);

})

}

export function remove (req: express.Request, res: express.Response, next) {
  User.findOneAndRemove({_id: req.params.id}, (err, p) => {
    if(err) return next(err);
    if(!p) return next({status: 404, message: "Could not find the requested user."});
    res.json({success: true});
  })
}

export function update (req: express.Request, res: express.Response, next) {
  User.findOneAndUpdate({_id: req.params.id}, req.body, {new: true}, (err,p) => {
    if(err) return next(err);
    if(!p) return next({status: 404, message: "Could not find the requested pet."});
    res.json(p);
  })
}
