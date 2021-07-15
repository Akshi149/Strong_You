import React from 'react';
import "../css/List.css";
import Navbar from "./Navbar";
export default class List extends React.Component{
    render(){
    return (
        <>
        <Navbar active = {"Emergency Contacts"}/>
        <br/><br/><br/><br/>
        <h1 style={{color:'#291b25', textAlign:'center'}}><u>EMERGENCY CONTACTS</u></h1>
<table>
  <tr>
    <th>Sr.No</th>
    <th>Name</th>
    <th>Contact No.</th>
  </tr>
  <tr>
    <td>1</td>
    <td>National Commission for Women (Delhi)</td>
    <td>011-23237166, 23234918</td>
  </tr>
  <tr>
    <td>2</td>
    <td>National Commison For Women (NCW)</td>
    <td>011-26942369, 26944754</td>
  </tr>
  <tr>
    <td>3</td>
    <td>National Human Right Commision</td>
    <td>011-23385368/9810298900</td>
  </tr>
  <tr>
    <td>4</td>
    <td>Student / Child Helpline</td>
    <td>1098</td>
</tr>
<tr>
    <td>5</td>
    <td>Andhra Pradesh Women Protection cell</td>
    <td>040-23320539</td>
</tr>
<tr>
    <td>6</td>
    <td>Hyderabad Women Police Station</td>
    <td>040-27852400/4852</td>
</tr>
<tr>
    <td>7</td>
    <td>ASSAM WOMEN HELPLINE</td>
    <td>181 , 9345215029, 0361-2521242</td>
</tr>
<tr>
    <td>8</td>
    <td>Bihar Women Helpline</td>
    <td>18003456247 / 0612-2320047 / 2214318</td>
</tr>
<tr>
    <td>9</td>
    <td>Chandigarh Women Police</td>
    <td>0172-2741900</td>
</tr>
<tr>
    <td>10</td>
    <td>Chattishgarh Women Commission</td>
    <td>0771-2429977,4013189,18002334299,0771-4241400</td>
</tr>
<tr>
    <td>11</td>
    <td>GOA Women Helpline</td>
    <td>1091 , 0832-2421208</td>
</tr>
<tr>
    <td>12</td>
    <td>GOA Women Commission </td>
    <td>0832-2421080</td>
</tr>
<tr>
    <td>13</td>
    <td>STATE WOMEN COMMMISION GUJRAT</td>
    <td>18002331111 / 079-23251604 , 079-23251613</td>
</tr>
<tr>
    <td>14</td>
    <td>GUJRAT - Ahemdabad Women Group</td>
    <td>7926441214</td>
</tr>
<tr>
    <td>15</td>
    <td>Haryana Women and Child Helpline</td>
    <td>0124-2335100</td>
</tr>
<tr>
    <td>16</td>
    <td>Women and Child Development Department</td>
    <td>0172-2560349</td>
</tr>
<tr>
    <td>17</td>
    <td>Himachal Pradesh Women Commision</td>
    <td>9816077100</td>
</tr>
<tr>
    <td>18</td>
    <td>Mumbai Police Women Helpline No. </td>
    <td>022-22633333, 22620111</td>
</tr>
<tr>
    <td>19</td>
    <td>Maharashtra Women Commision</td>
    <td>07477722424</td>
</tr>
<tr>
    <td>20</td>
    <td>Maharashtra Women Helpline</td>
    <td>022-26111103, 1298 , 103</td>
</tr>
<tr>
    <td>21</td>
    <td>Women Helpline Punjab</td>
    <td>1091 / 112</td>
</tr>
<tr>
    <td>22</td>
    <td>Women Helpline Amritsar City Only</td>
    <td>9781101091</td>
</tr>
<tr>
    <td>23</td>
    <td>Punjab Samvad ( NGO )</td>
    <td>0172- 2546389, 2700109, 276000114</td>
</tr>
<tr>
    <td>24</td>
    <td>Tamil Nadu Women Helpline</td>
    <td>044-28592750</td>
</tr>
<tr>
    <td>25</td>
    <td>Rajasthan Nirbhaya Helpline</td>
    <td>1800-1200-020</td>
</tr>
<tr>
    <td>26</td>
    <td>Rajasthan Women Commission</td>
    <td>0141-2779001-4</td>
</tr>
<tr>
    <td>27</td>
    <td>Jodhpur Women Helpline</td>
    <td>0291-2012112</td>
</tr>
<tr>
    <td>28</td>
    <td>Banglore Women Police</td>
    <td>080-22943225</td>
</tr>
<tr>
    <td>29</td>
    <td>Karnataka Women Police</td>
    <td>0821-2418400</td>
</tr>
<tr>
    <td>30</td>
    <td>Mysore Women Police</td>
    <td>0821-2418110/2418410</td>
</tr>
<tr>
    <td>31</td>
    <td>Madhya Pradesh Women Commission</td>
    <td>0755-2661813, 2661802, 2661806, 2661808 ,1800-233-6112</td>
</tr>
<tr>
    <td>32</td>
    <td>Madhya Pradesh Mahila thana</td>
    <td>0731-2434999</td>
</tr>
<tr>
    <td>33</td>
    <td>Kerala Women Police Helpline (Trivandrum)</td>
    <td>9995399953</td>
</tr>
<tr>
    <td>34</td>
    <td>Kerala Women’s Commission</td>
    <td>0471-2322590, 2320509, 2337589, 2339878, 2339882</td>
</tr>
<tr>
    <td>35</td>
    <td>Women Cell , Kollam</td>
    <td>0474-2742376</td>
</tr>
<tr>
    <td>36</td>
    <td>Women Cell , Kochi</td>
    <td>0484-2396730</td>
</tr>
<tr>
    <td>37</td>
    <td>Uttar Pradesh Women Helpline </td>
    <td>1090 / 112 </td>
</tr>
<tr>
    <td>38</td>
    <td>Uttar Pradesh Women commission </td>
    <td>0522-2306403 , 18001805220 </td>
</tr>
<tr>
    <td>39</td>
    <td>West Bengal Commission for Protection of Child Rights (WBCPCR)
	( Child marriages and trafficking ) </td>
    <td>9830056006 , 9836078780,Whatsapp : 9836300300 </td>
</tr>
<tr>
    <td>39</td>
    <td>NARI RAKSHA SAMITI</td>
    <td>011-23973949 </td>
</tr>
<tr>
    <td>40</td>
    <td>JAGORI </td>
    <td>011-26692700 </td>
</tr>
</table>
<br/><br/><br/>
</>
    )}}
