import React, { Component } from 'react'
import {Carousel} from 'react-bootstrap'
// All Image Carousels Here 
import item1 from  '../images/jerusalem1.jpg'
import item2 from '../images/jerusalem4.jpg'
import item3  from '../images/jerusalem3.jpg'
import './carousels.scss'
export default class Carousels extends Component {
    render() {
        return (
          <div>
                <Carousel fade={true} controls={false} interval={3000}>
                    <Carousel.Item >
                      <img
                        className="d-block w-100"
                        src={item1}
                        alt="First slide" className="custom-image"/>
                      <Carousel.Caption className="custom-caption">
                        <h2 style={{fontSize: '60px'}}>الرؤية</h2>
                        <q> نسعى في جمعية لجنة اليتيم العربي إلى تمكين الشباب المحتاجين من خلال تسليحهم بفرص متساوية في التعليم.</q>
                      </Carousel.Caption>
                  </Carousel.Item>
                
                <Carousel.Item>
                  <img
                    className="d-block w-100"
                    src={item2}
                    alt="Third slide" className="custom-image" />

                  <Carousel.Caption  className="custom-caption">
                    <h2  style={{fontSize: '60px'}}>الرسالة</h2>
                    <q> تمكين الشباب المحتاجين في الأردن وفلسطين للحصول على مقومات الحياة المعيشية الكريمة لهم ولعائلاتهم من خلال توفير التعليم وفقاً للمعايير العالمية إلى جانب توفير قروض ومنح جامعية بما يساهم في تنميةالمجتمعات.</q>
                  </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                  <img
                    className="d-block w-100"
                    src={item3}
                    alt="Third slide"  className="custom-image"/>

                  <Carousel.Caption className="custom-caption">
                    <h2  style={{fontSize: '60px'}}>الفئات المستفيدة</h2>
                    <q> الفئة المستفيدة بشكل عام هم الطلبة المحتاجين الحاصلين على شهادة تؤهلهم الدراسة الجامعية ولديهم قبول جامعي أو يدرسون في وقت التقديم في إحدى الجامعات وتنطبق عليهم شروط الجمعية، إلى جانب طلاب المنشأة في القدس. </q>
                  </Carousel.Caption>
                </Carousel.Item> 
              </Carousel>
                
            </div>
        )
    }
}