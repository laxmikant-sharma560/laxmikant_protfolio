import React from 'react'
import Typewriter from "typewriter-effect";
import Marquee from "react-fast-marquee";
import SkillBox from './SkillBox';

function Skills() {
    return (
        <>
            <div className='my-20'>
                <h1 className="text-5xl my-5 text-center mx-2 font-bold sm:text-5xl text-[#ffff]">
                    <span className="text-[#a855f7]">My Skill Bag 💼</span> <Typewriter
                        options={{
                            strings: ["HTML & CSS", "JavaScript", "React-JS", "Python & DJango", "Tailwind-css", "Bootsrap"],
                            autoStart: true,
                            loop: true,
                            // cursor: "|",
                        }}
                    />
                </h1>

                <div className="mx-1 md:mx-5 lg:mx-20">
                    <Marquee speed={90} gradientColor={[0, 0, 0]} gradientWidth={60}>
                        <SkillBox name={"HTML"} img={"./skill-img/html.png"} />
                        <SkillBox name={"CSS"} img={"./skill-img/css.png"} />
                        <SkillBox name={"JavaScript"} img={"./skill-img/js.png"} />
                        <SkillBox name={"ReactJS"} img={"./skill-img/react.png"} />
                        <SkillBox name={"Matplotlib"} img={"./skill-img/matplotlib.jpeg"} />
                        <SkillBox name={"Bootsrap"} img={"./skill-img/bootstrap.png"} />
                        <SkillBox name={"Tailwind CSS"} img={"./skill-img/tailwind.png"} />
                        <SkillBox name={"NumPY"} img={"./skill-img/numpy.png"} />
                        <SkillBox name={"Pandas"} img={"./skill-img/pandas.png"} />
                        <SkillBox name={"DJango"} img={"./skill-img/django.jpeg"} />
                        <SkillBox name={"Python"} img={"./skill-img/python.png"} />
                        <SkillBox name={"RDBMS"} img={"./skill-img/sql.webp"} />
                        <SkillBox name={"SeaBorn"} img={"./skill-img/seaborn.jpeg"} />
                    </Marquee>
                </div>


            </div>




        </>
    )
}

export default Skills