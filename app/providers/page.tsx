import Image from "next/image";
import {ExcelUploadForm} from "@/components/excel-upload-form"

export default function Home() {
    return (    
        <div>
            <div>
                <Image height="200" width="1280" src="/img/feeding-people.jpg" alt="Feeding People" className="h-96 w-full object-cover object-top p-0"/>
            </div>
            <div>
                <p>We find ourselves in a world where abundance and scarcity alarmingly coexist. In Mexico, 20.4 million tons of food are wasted every year, equivalent to 38 tons per minute. This is enough to feed 25.5 million people with food shortages. On the other hand, 3 out of every 10 people in Mexico face some degree of food insecurity. At this moment, there are 4.8 million Mexicans who probably have not eaten and perhaps will not do so for the rest of the day.</p>
                <p>How can we help? By donating unsold food or food that is close to its expiration date, we can ensure that these foods reach the people who need them most instead of ending up in the trash. By doing so, we are not only helping to combat hunger, but we are also reducing our environmental impact and making more efficient use of our resources.</p>
                <p>We invite all restaurants, supermarkets, and other food businesses to join us in this initiative. Together, we can make a big difference in the lives of millions of people and help create a more just and sustainable world.</p>
                <p>Join us today and be part of the solution!, <span>donate your food</span></p>
            </div>
            <div>
                <h2>Donate your food here</h2>
                <div>
                    <ExcelUploadForm />
                    <a href="/files/food-supply-template.xlsx" download={true}>
                        Download template excel
                    </a>
                </div>
                <div>
                    <h4>Format Example</h4>
                    <table>
                        <thead>
                            <tr>
                                <th>Food Name</th>
                                <th>Quantity</th>
                                <th>Unit</th>
                                <th>Packages</th>
                                <th>Start Date</th>
                                <th>End Date</th>
                                <th>Start Hour</th>
                                <th>End Hour</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Rice</td>
                                <td>1</td>
                                <td>kg</td>
                                <td>10</td>
                                <td>2024/08/12</td>
                                <td>2024/08/14</td>
                                <td>15:00</td>
                                <td>18:00</td>
                            </tr>
                            <tr>
                                <td>Beans</td>
                                <td>2</td>
                                <td>kg</td>
                                <td>8</td>
                                <td>2024/08/13</td>
                                <td>2024/08/15</td>
                                <td>16:00</td>
                                <td>19:00</td>
                            </tr>
                            <tr>
                                <td>Corn</td>
                                <td>3</td>
                                <td>kg</td>
                                <td>7</td>
                                <td>2024/08/14</td>
                                <td>2024/08/16</td>
                                <td>17:00</td>
                                <td>20:00</td>
                            </tr>
                            <tr>
                                <td>Wheat</td>
                                <td>4</td>
                                <td>kg</td>
                                <td>6</td>
                                <td>2024/08/15</td>
                                <td>2024/08/17</td>
                                <td>18:00</td>
                                <td>21:00</td>
                            </tr>
                            <tr>
                                <td>Barley</td>
                                <td>5</td>
                                <td>kg</td>
                                <td>5</td>
                                <td>2024/08/16</td>
                                <td>2024/08/18</td>
                                <td>19:00</td>
                                <td>22:00</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div>
                    <h4>Descripción de los Campos</h4>
                    <ul>
                        <li><b>Food Name</b>: This is the name of the food to be donated. For example, it can be rice, beans, corn, etc.</li>
                        <li><b>Quantity</b>: This is the total amount of food to be donated. For example, if you have 1 kg of rice, then the amount would be 1.</li>
                        <li><b>Unit</b>: This is the unit of measure for the amount of food to be donated. For example, if you have 1 kg of rice, then the unit would be kg.</li>
                        <li><b>Packages</b>: This is the total number of food packages to be donated. For example, if you have 10 packages of 1 kg of rice each, then the packages would be 10.</li>
                        <li><b>Start Date</b>: This is the start date on which the food can be collected. For example, if you are going to start donating the food on August 12, 2024, then the start date would be 2024/08/12.</li>
                        <li><b>End Date</b>: This is the end date by which the food can be collected. For example, if you are going to finish donating the food on August 14, 2024, then the end date would be 2024/08/14.</li>
                        <li><b>Start Hour</b>: This is the start time of the day at which the food can be collected. For example, if you can distribute the food starting at 3:00 pm, then the start time would be 15:00.</li>
                        <li><b>End Hour</b>: This is the latest time of the day that food can be collected. For example, if you stop distributing food after 8:00 p.m., then the start time would be 20:00.</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}