import React from "react";
import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";
import ProjectBox from "../Components/ProjectBox";

function Projects() {
  return (
    <>
      <Navbar />
      <h1 className="text-3xl text-center lilita-font sm:text-4xl text-[#ffff]">
        My Creative <span className="text-[#a855f7]">Projects</span>
      </h1>

      <div className="my-10">
        <div className="flex flex-wrap justify-center">
          <ProjectBox
              name={"Stickers Vibe"}
              img={"./project-img/stickers-vibe-img.png"}
              github_link={"#"}
              project_link={"https://stickers-vibe.vercel.app/"}
            />
            <ProjectBox
              name={"Task Mate"}
              img={"./project-img/task-mate-img.png"}
              github_link={"#"}
              project_link={"https://task-mate-zbytes.vercel.app/"}
            />
            <ProjectBox
              name={"Wallet Boss"}
              img={"./project-img/walletBoss-img.png"}
              github_link={"#"}
              project_link={"https://zbytes2227.github.io/thewalletboss"}
            />
            <ProjectBox
              name={"PolyA2z"}
              img={"./project-img/polya2z-img.png"}
              github_link={"#"}
              project_link={"https://polya2z.github.io/"}
            />

            <ProjectBox
              name={"Contacts App"}
              img={"./project-img/contacts-img.png"}
              github_link={"#"}
              project_link={"https://zbytes2227.github.io/my-contacts/"}
            />

            <ProjectBox
              name={" Car Rental  "}
              img={"./project-img/car.jpg"}
              github_link={"https://github.com/laxmikant-sharma560/car_rental"}
              project_link={"https://car-rental-1sym.onrender.com/ "}
            />

            <ProjectBox
              name={"Contacts Management"}
              img={"./project-img/contm.jpeg"}
              github_link={"#"}
              project_link={"#"}
            />

            <ProjectBox
              name={" MYPORTFOLIO "}
              img={"./project-img/laxmikant-1.png.jpg"}
              github_link={"#"}
              project_link={"#"}
            />

            <ProjectBox
              name={" Company Management "}
              img={"./project-img/company.jpeg"}
              github_link={"#"}
              project_link={"#"}
            />
        </div>
      </div>

      <Footer />
    </>
  );
}

export default Projects;
