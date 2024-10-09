import EOPCard from "../Components/EOPCard/EOPCard"
import Footer from "../Components/Footer/Footer"
import Heading from "../Components/Heading/Heading"
import ResponsiveNavbar from "../Components/ResponsiveNavbar/ResponsiveNavbar"
import staffImg from "../../public/Images/staff.png"
import StaffCard from "../Components/StaffCard/StaffCard"

const OurStaff = () => {
  return (
    <>
    <ResponsiveNavbar/>
    <div className="p-4 mb-4 container-fluid">
        <Heading HeadingText="Our Staff"/>
        <div className="d-flex align-content-center justify-content-center flex-wrap ">
          <div className="p-2">
            <StaffCard staffImage={staffImg} staffName="Mr Tilok Kumar Verma" staffDesignation="PGT Physics"/>
          </div>
          <div className="p-2">
            <StaffCard staffImage={staffImg} staffName="Mr Kumar" staffDesignation="PGT Physics"/>
          </div>
          <div className="p-2">
            <StaffCard staffImage={staffImg} staffName="Mr Kumar" staffDesignation="PGT Physics"/>
          </div>
          <div className="p-2">
            <StaffCard staffImage={staffImg} staffName="Mr Kumar" staffDesignation="PGT Physics"/>
          </div>
          <div className="p-2">
            <StaffCard staffImage={staffImg} staffName="Mr Kumar" staffDesignation="PGT Physics"/>
          </div>
          <div className="p-2">
            <StaffCard staffImage={staffImg} staffName="Mr Kumar" staffDesignation="PGT Physics"/>
          </div>
          <div className="p-2">
            <StaffCard staffImage={staffImg} staffName="Mr Kumar" staffDesignation="PGT Physics"/>
          </div>
          <div className="p-2">
            <StaffCard staffImage={staffImg} staffName="Mr Kumar" staffDesignation="PGT Physics"/>
          </div>
          <div className="p-2">
            <StaffCard staffImage={staffImg} staffName="Mr Kumar" staffDesignation="PGT Physics"/>
          </div>
          <div className="p-2">
            <StaffCard staffImage={staffImg} staffName="Mr Kumar" staffDesignation="PGT Physics"/>
          </div>
          <div className="p-2">
            <StaffCard staffImage={staffImg} staffName="Mr Kumar" staffDesignation="PGT Physics"/>
          </div>
          <div className="p-2">
            <StaffCard staffImage={staffImg} staffName="Mr Kumar" staffDesignation="PGT Physics"/>
          </div>
          <div className="p-2">
            <StaffCard staffImage={staffImg} staffName="Mr Kumar" staffDesignation="PGT Physics"/>
          </div>
        </div>
    </div>
    <Footer/>
    </>
  )
}

export default OurStaff