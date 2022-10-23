import React from 'react'
import { Link } from 'react-router-dom'
import FooterSecond from '../../components/FooterSecond'
import Layout from '../../components/Layout'
import "./Aboutwelham.css"

function AboutWelham() {
    return (
        <Layout>
            <section className="our-team team-page sec-pad1">
                <div className="container ">
                    <div className="team-title centred">
                        <div>
                            {/* <h2 style="color: #337ab7;  margin-bottom: 40px;">About Welham</h2> */}
                        </div>
                        <img src="https://cdn.discordapp.com/attachments/1031605156996972574/1031894734794403900/about_welham_1.jpg" alt="" />
                    </div>
                    <div className="row">
                        <div className="page-content">
                            <p style={{
                                textAlign: 'justify',
                                textJustify: 'interWord'
                            }}>
                                Welham Girls School Dehradun is a highly renowned English medium girls boarding school in Dehradun. It was founded in the year 1957 by Ms H.S Oliphant. The school is affiliated with the Indian Certificate of Secondary Education (ICSE) and is also a member of the Indian Public Schools Conference (IPSC). Welham Girls has consistently ranked among the top schools in India by various national and international magazines.
                                The academic selection of Welham Girls School Dehradun is par excellence as it offers a rich learning experience to its students through different clubs and activities like debate, science exhibitions and quizzes, vital for all-round development.
                                <br /><br />
                                Welham Girls School also offers a foreign exchange program to its students. The purpose of the exchange is to improve their language skills and cultural understanding while continuing their studies at school which also helps them compete and win various accolades in competitions at the national and international levels
                                <br /><br />
                                Welham Girls' School is a heritage school that is recognized for graduating many successful women including former Lok Sabha speaker Meira Kumar, Jyoti Filip (Executive Secretary at United Nations Organization), Politicians like Brinda Karat and Renuka Chowdhury and a handful of Notable Officers like Neera Yadav, Pooja Elangam and Diksha Joshi.
                                <br /><br />
                                The school has maintained its reputation for maintaining academic standards essential for personal development. It occupies a beautiful setting amidst the heart of Dehradun city at No.19 Municipal Road, Dalanwala Road. It has a beautiful lush green campus spread over 15 acres of land with a big playground, basketball court, football ground and tennis court.
                                <br /><br />
                                The school has marvelous British architecture. The main building contains all classrooms from pre-primary to senior secondary level, an auditorium for various cultural activities such as dance and music performances, a library with over 10,000 books and journals, a computer lab with more than 30 computers, smart board facility in all classrooms for the interactive teaching-learning process, audio-visual room for conducting seminars and workshops. Science labs are set up with modern equipment for conducting experiments with safety measures.
                                <br /><br />
                                The school has achieved the top rank in the Indian educational system as the top boarding school in India and this is possible because of its outstanding performance over the past year. The students of  Welham Girls' School have always performed remarkably well in the exams held by the ICSE boards.
                                <br /><br />
                                The prolonged legacy of Welham has helped it prove its mettle. There have been many able educationists at the pinnacle of this leading the institution, starting from Miss Linnell in 1957 to Vibha Kapoor the present headmistress. All the serving leaders have massively contributed to the institution.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </Layout>
    )
}

export default AboutWelham