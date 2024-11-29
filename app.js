 let a = 5
//?let exp1 = ((4 + 5) &&"abc"|| false + "test") * (a-- || --a) || (false && (++a + 1)) *"end";
//         9     trutyh abc thruty abc("abc"||false+"test"&&(5+4))*(a-- || --a) abc*5 
// Ams NaN
//?let exp2 = 10 * ("foo"&& 5 + (++a) ||"bar")&&(false+"test") || 0 &&true;
// solve//               5+6=11  10*11=110 110 && (false + "test") falsetest  
// Ans FalseTest   
//?let exp3 = 3 + (a-- || "start") * 4 && (--a + "value") * (1 + 2) + "result";
//         3  +  (5*4=20)=23 thruthy                (4+Value)*(3)=NAN+result
// Ans NAN
//?let exp4 = "hello" * (++a + true) || (2 + 3 * "abc") * (0 + 1) + "xyz" && 0;
//             hello*(6+1=7)NAN (5*abc=NAN)NAN *1 =NANxyz +0 NAN||0 
// Ans 0
//?let exp5 = (true || (0 + 1) * "test" && 4) || (false && 3 + "value") * a-- + 2;
//          true                               0*4=0 +2=2       true || 2
//ans true
//?let exp6 = ++a + "abc" && (4 * 2) + 3 || (0 + 1) && (3 * "hello") || a--;
//             6+abc=6abc      8=3=11          1         3*hell0     
//ans 11   
//?let exp7 = ("foo" + 5) * (++a + true) || 2 * 3 + (true + 2) || "result";
//      (foo5*7-nan)      NaN  ||  (2*3=6)+(1+2=3)(6+3=9)9||result
//ans 9
//?let exp8 = (0 + 1) && (true + 0) || (false + "test") * 4 && 3 + 2 || "value";
//          1&&1    ||      "falsetest"*5=nan nan||"value"
//ans value
//?let exp9 = 3 * "abc" + (true + 1) || (++a + "test") && (3 + "result") || null;
//          3*abc= NAN+ 2= NAN || 6test&&3result||null
// ans 3result
//?let exp10 = (++a + false) && "start" || 0 + 1 && "value" || 5 * "end" && a++;
//           (6+0=6) ||start     start|| 
//ans start
//?let exp11 = (false && "hello") + (a++ || 3 + "test") * 4 || 5 * "abc" && 0;
//        (0&&"hell0"=false)+(6||3Test=6)0+6*4=24 24||5*abc=NaN 24||NaN= 24
//ans 24
//?let exp12 = "hello" * (true + 0) + 2 || (false + 1) * 3 && "result" || 4 + "test";
//          (1+0=1)+2*"hello"=NaN ||   (0+1=1)3*1=3 && "result"   "result"|| "4Test"
//Ans "Result"
//?let exp13 = 5 * (a++ || false) + 2 && (false + "test") || 3 * "end" && 4;
//     5*5=25+2=27       27 &&   false+"test"="falsetest"
// ans falsetest 
//?let exp14 = (false + "abc") * 2 || (--a + 1) * "start" + 3 && 4 || "end";
// (false+abc="falseabc")*2=NaN ||  (5+1=6)*"star"=NaN +3 =NaN &&4||"end"
//ans "end"
//?let exp15 = (0 + "foo") * 3 + (true && "result") || "start" + (++a + 1) * 4;
// (0+foo = 0foo)*3=Nan  NaN+"result"="NaNRESULT" || "start"*6=NaN *4 =NaN "NaNresult" ||NaN
//Ans  "NaNresult"
//?let exp16 = 2 * "end" || (false && true) || "start" + (--a + 2) * 5 && null;
//   2*end=NaN || fasle || (4+2=6)6*5=30 +start =start30 &&null 
//ans null
//?let exp17 = 3 + 2 * ("test" + a--) && (false + 3) * 5 || 0 + "value" && 4;
// (test+4=test5)*5=NaN && (0+3*5=30)NAN || 0+"value"= "0value" &&4 
///ans 4
//?let exp18 = "start" && (false || 2 * "end") || (++a + 1) * 3 + "result" && 0;
//  start&&NAN NAN || 21+result = 21result && 0 
//ANs 0
///?let exp19 = ((5 + 1) && "foo") || (++a + 2) * (false + 3) + "test" && 7;
//    6&&"foo"= "foo"||  (++a + 2) * (false + 3) + "test" && 7;
//ans "foo"
//?let exp20 = 2 * 3 + "hello" && (false + ++a) * "result" || "end" + 5 || 0;
//     2*3=6 6+"result"= "6result"&& (0=6)6*"result" NaN  NaN|| "end5" || 0
//ANS "end5"
//?let exp21 = 5 * (true + ++a) && ("test" + false) || 7 * (true + 2) + "value";
//    5*(1+6=7)7*5=35     test+false="trstfalse"|| (1+2=3)*7=21+'value'
//Ans "testfalse"
//?let exp22 = "foo" + 4 && (++a + 1) * "start" || 5 + 6 * (false + true) && "test";
// "foo"+4='foo4' && (6+1*"start")=NaN || 5+6(0+1=1)*11=11&&"test"
// ans "test"
//?let exp23 = (false && 2) || (a++ + 1) * "end" && "start" || 4 * 5 && "result";
 // (false)||(6+1=7)*"end"=NaN && "strat" NaN||4*5=20 && "result"
 //ANS "result"
//?let exp24 = 3 + 2 * "test" || (false + a--) * "hello" && "world" + 1 || 2;
// 5*"test"=NaN || (0+4)*"hello"=NaN && "world"+1="world1" NaN||2
//ans 2
//?let exp25 = (3 + 4) * (false || a--) && 5 || "start" + 1 + "test" && 0;
     //       7*5=45&&5  5  || && 0
     //ans 5
//?let exp26 = "hello" && 3 * 2 + (a++ + 1) || (false + true) * "result" + "end";
//                  3*2=6+ 6*6=12 || NAN + "end"
//Ans 12
//?3 * "test" + (true + 2) && (false || "value") || "start" + a++;
//        NaN&& "value" NaN|| "start5"
//ans "start5"
//?let exp28 = (false + 1) * "hello" || 3 + (a-- && 5) * "result" || "world";
//             1*hello=NaN || NaN || "world"
// Ans "world"
//?let exp29 = "start" + 2 * (true || 1) && (false || "value") * 5 + "result";
 //                 "start"+2="start2" * 1 =NaN && value * 5= NaN  "start2"&&NaN = NaN + "Nanresult"
// ans "NaNresult"
//?let exp30 = (true + 3) * "test" || 1 * 5 && (false + "value") + "end" || a--;
     //  (1+3=4)8"test" = NaN || 1*5=5 && (false+"value"="falseValue")+"end"= "falswvalueend"||4
     // ans "falswvalueend"
     //? let exp31 = 3 + "end" || 2 * "test" && (++a + true) || "start" + 1;
     // 3+"end"="3end" || 2*"test"= NaN 
     // ans "3end"
     //?let exp32 = (0 + 3) * (true + false) || 5 * "hello" + 2 && (false + "test");
          //        (3+0=3)*(1+0=1)=3||5*"hello"=NaN
          //ANS 3
//? let exp33 = 2 + 3 && ("end" + a++) || (false + "test") * 4 && 5;
//             2+3=5&&("end"+5="end5")||(0+1=1)*"test"=NaN
// ans "end5"
//? let exp34 = "hello" + 4 * (false + a--) || 3 && "start" + 1 || (true + "test");
//                       (0+5=5)*4=20+"hello"=hello20"|| 3 && "start1"|| (1+"test")="1"test"
//   ans "hello20"
//?let exp35 = "start" && (a-- || "test") * 4 + 5 && (false + "end") || 2;
              // "start"&& (5||"test")5*4=20 20+5=25 (false+"end")""falseend"|| 2
              //ans "falseend"
//? let exp36 = 1 + "value" && (++a + 2) || (3 + "result") * true && 4;
//             1"value'=1"value && (5+1+2=8)||(3+"result")*true &&4
//ans 8
//?let exp37 = "hello" && 2 + "test" || (++a + 3) && (true + "value") + 1;
//             "hello"&& 2+"test"="2test"|| {5+1+3=9}&& (true+"value")"truevalue"+1="truevalue1"
// ans "2test"
//?let exp38 = 5 * (a-- || "test") && 6 * "result" || 2 + "end";
//             (5||"test") 5*5=25 && 6*"result"=NaN || 2+"end" ="2end"
//ans "2end"
//?let exp39 = "start" && (false + 1) * 2 || 3 + 4 * "hello" + 5 && 0;
//             "start"&& (0+1 =1)*2=2 || 3+4*"hello"=NaN +5=NaN && 0
//ans 2
//?let exp40 = (false || "test") * 5 || 6 + (a-- && "result") * 4;
//        (false||"test")*5=NaN || 6+(5&&"result")=NaN *4=NaN
//ans NaN
//?let exp41 = "start" && (3 + 2) * "test" + 5 || 4 * (false + 1) && "hello";
//         "strat"&& (3+2=5)*"test"=NaN || 4*(0+1=1)=4 && "hello"
//ans "hello"
//?let exp42 = 1 + 2 * "end" || (false + 3) && "result" * 4 + a--;
//         3*"end"=NaN || (0+3=3)&& "result"*4=Nan +5
//ans NaN
///?let exp43 = (false && a--) || 4 * (3 + 2) && "start" + 5;
 //    (false)|| 4*5=20 && "start"+5="start5"
 //ans "start5"
 //?let exp44 = 3 + 2 * (true + 5) && "value" + 1 || (++a + 2) + "test";
 //   3+2*(1+5=6)6=30 && "valus"+1 ="value1"|| (6 + 2) + "test";
 //ans "value1"
 //?let exp45 = (false || 1) + "test" && 5 + (3 * a--) || "end" + 2;
 //            (0||1)1+"test"="1test" && 5+(3*5=15)20 || "end"+2 ="end2"
 //ans 20
 //?let exp46 = (2 * a-- + 4) && "test" || 3 + "hello" && (false + 1) * 5;
 //    (2*5+4)=&& "test" || 3+"hello" =3"hello && (0+1)+5=5
 //ans 5
 //? let exp47 = 0 + "result" && (3 + 1) * 2 || (false + a--) * "end";
 // o"reesult && (3+1=4)*2=8||(false + a--) * "end";
 // ans 8
 //?let exp48 = (false || 1) * "test" && 4 || (true + 2) * "hello" + a--;
 //   (0|| 1)= 1 *"test "= NaN || (1+2=3)*"hello"=NaN + 5 = nan
// ans NAN 
//?let exp49 = (2 * 3) + "result" && 4 * (a-- + 1) || "start" + 2 + "end";
//    (2*3)=5+"result"=5"result && 4*(5+1=6)24||"start" + 2 + "end";
//ans 24
//?let exp50 = 32 && true - ++a && " " || "true";
//      32&& 1 -5=-5&&" "|| "true"
// console.log(" "|| true);
// " "
//?let exp51 = (5 + 2) * (a-- + 1) || "start" + (++a + "end") * 3;
//        (5+2=7)*(5+1+6)=|| "start" + (++a + "end") * 3;
//Ans 24
//?let exp52 = (++a && 3) * "test" || 4 + "start" * (a-- + "result");
//             (6)*"test"=NaN || 4+start"*(6+"result")=NaN
//    ans  NaN
//?let exp53 = 3 + "value" * (++a + 1) || (a-- && "start") + "end";
 //            3+"value"(6+2)=NaN || (5&&"start")+ "end"="startend"
 // "startend"
 //?let exp54 = (a-- + 2) * "result" || (false && 5) * "test" + 4;
 //       (6+2)*"result"=NaN || (0&&5)=0 = *"test"+4 = nan
// console.log(4*"end");
 //ans NaN
 //?let exp55 = "start" + 5 * (a-- + "test") || (false + 2) * "value";
  // "start "+5="start5"*(5+"test")=Nan || (0+2 = 2)*"value"=NaN
  //ans NaN
  //?let exp56 = 4 * (a-- + 1) + "test" || (++a + 3) * "start" + 5;
  //   4*(5+1)=24 +"test"="24test"||(6 + 3) * "start"=NaN + 5 =NaN;
  //  Ans "24tset"
  //?let exp57 = (3 * "test" + 1) || (++a && a--) * "result" || "value";
  //      (3*"test"+1)=NaN || (6&&5)*"result"=NaN || "value"
  // ans value
  //?let exp58 = (a-- + "start") * "result" || (false + 2) + "end" + 3;
  //      (5+"start")*"result"=NaN || (0+2)+"end"+3="2end3"
  //ans "2end3"
  //?et exp59 = 5 * (a-- + 3) * "test" || (false && "start") + 2;
  //  nan || (0+2)2
  //Ans 2
  ///?let exp60 = (a-- + "value") * "test" + 4 || (false + 2) * "end";
 //   (5+"value"*test)=NAN +4 = NaN|| (0+2)=2*"end"=NaN
  //NaN
  //?let exp61 = 3 + (++a + "result") || (a-- + 2) * "test" + 5;
  //           3+(6+"result")="36"result"|| (5+2)*test=NaN + 5 =NaN
  // 36result
  //?let exp62 = "start" + (a-- + "test") * 3 || (false && 4) * "end" + 5;
  //        (5+"test"=5test)*3=NaN ="start="NaNstart" ||(0 && 4) * "end" + 5;
  //"NaNstart" 
  //?let exp63 = (++a + 2) * "test" || "value" + (a-- + 3) * "result";
  //                (6+2)=test= NaN || (5+3)*=NaN + "value"=NaNValue
  //"NaNValue"
  //?let exp64 = 5 * "end" + (a-- + 1) * "test" || "start" + (false && "result");
  //                (5+1=5)*"test"+"end"*5=NaN || (false&& "result")=false+"start" "startfalse"
  // "startfalse"
  //?let exp65 = "value" + 3 * (a-- + "test") || (false + 1) * "end";
  //  (5+"test")*3 = NaN +"value"=NanValue||(false + 1) * "end";
  //"NanValue"
  //?let exp66 = (++a + "test") * 2 || (a-- + 1) * "start" + "result";
//   (6+"test")="6test"*2 = NaN || (5+1=6)*"start"=NaN +"result"="NaNresult"
//"NaNresult"
//?let exp67 = "start" + (a-- + 3) * "end" || (++a + "test") * 5;
          //"start"+(5+3)*"end"NaN +start = "NaNstart"|| (++a + "test") * 5;
          //NANstart
//?let exp68 = 2 * (a-- + 1) + "result" || (false && "start") * 3;
//             2*(5+1=6)=12 +result = 12result || (false && "start") * 3;
//12result
//? let exp69 = 4 + (a-- + "test") * 5 || (false + 2) * "start";
//        (5+"test")="5test"*5=NaN + 4 =NaN || (0+2)2*"start"=NaN
//NaN
//?let exp70 = (a-- + 2) * "result" || (false && "end") + 3;
 //                 (5+2=7)*"result"=NaN|| (false && "end")0+3=3
 //3
 //?let exp71 = "test" + 2 * (a-- + 3) || (false && "start") + 4;
 //       (5+3=8)*2=16+"test"="16test"|| (false && "start") + 4;
 //"16test"
 ///?let exp72 = 3 * (a-- + "value") || (false + 2) * "test";
 //       (5+"value")"5value"*3=NaN || (0+2=2)*"test"=NaN
 //NaN
//?let exp73 = (a-- + "test") * 4 || (false + 1) * "result" + "start";
//             (5+"test")="5test"*4=NaN || (0+1=1)*"result"=NaN + "start" NaNstart
//NaN start
//?let exp74 = (++a + 5) * "end" || (a-- + 2) * "result" + "start";
 //   (5+5=10)*"end"=NaN ||(5+2=7)*"result"=naN + start +"NaNstart"
 //"NaNstart"
 //?let exp75 = (3 * "test") + (a-- + "start") || (false + 1) * "result";
 //       (3*"test")=NaN + (5+"start")="NaN5start"|| (0+1=1)+"result"
 //"NaN5start"

 
 
         


  
  


 











    


