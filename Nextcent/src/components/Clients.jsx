import React from "react";
import Company01 from "../assets/Company 01.png";
import Company02 from "../assets/Company 02.png";
import Company03 from "../assets/Company 03.png";
import Company04 from "../assets/Company 04.png";
import Company05 from "../assets/Company 05.png";
import Company06 from "../assets/Company 06.png";
import groupIcone from "../assets/groups.png";
import membersIcone from "../assets/members.png";
import associationIcone from "../assets/association.png";
import Rafiqi from "../assets/rafiki.png";
import Payment from "../assets/Payment.png";
import Member from "../assets/Member.png";
import Club from "../assets/Club.png";
import Event from "../assets/Event.png";

const Clients = () => {
  return (
    <div>
      <div className="flex items-center justify-center flex-col gap-4 mt-16">
        <p className="text-3xl font-semibold text-gray-800">Our Clients</p>
        <p className="text-gray-600">
          We have been working with some Fortune 500+ clients
        </p>
        <div className="flex items-center gap-28 mt-8 flex-wrap">
          <img src={Company01} className="w-12" alt="Company01" />
          <img src={Company02} className="w-12" alt="Company02" />
          <img src={Company03} className="w-12" alt="Company03" />
          <img src={Company04} className="w-12" alt="Company04" />
          <img src={Company05} className="w-12" alt="Company05" />
          <img src={Company06} className="w-12" alt="Company06" />
        </div>
        <p className="text-gray-950 font-semibold mt-12 text-2xl text-center w-96">
          Manage your entire community in a single system
        </p>
        <p className="text-gray-600 mt-2">Who is Nextcent suitable for?</p>
      </div>
      <div className="grid grid-cols-3 gap-8 mt-12 px-32 mb-16">
        <div className="flex flex-col items-center text-center gap-4">
          <img src={membersIcone} alt="Members Icon" />
          <p className="text-2xl font-semibold w-52 mt-3">
            Membership Organisations
          </p>
          <p className="text-gray-600 w-72">
            Our membership management software provides full automation of
            membership renewals and payments
          </p>
        </div>
        <div className="flex flex-col items-center text-center gap-4">
          <img src={associationIcone} alt="Association Icon" />
          <p className="text-2xl font-semibold w-52 mt-3">
            Natinal Associations
          </p>
          <p className="text-gray-600 w-72">
            Our membership management software provides full automation of
            membership renewals and payments
          </p>
        </div>
        <div className="flex flex-col items-center text-center gap-4">
          <img src={groupIcone} alt="Group Icon" />
          <p className="text-2xl font-semibold w-48 mt-3">Clubs And Groups</p>
          <p className="text-gray-600 w-72">
            Our membership management software provides full automation of
            membership renewals and payments
          </p>
        </div>
      </div>
      <div className="bg-blue-100 flex items-center justify-center gap-20 py-16 px-32">
        <div>
          <img src={Rafiqi} alt="Rafiqi" className="w-[600px]" />
        </div>
        <div>
          <p className="text-4xl font-semibold w-[500px]">
            The unseen of spending three years at Pixelgrade
          </p>
          <p className="text-gray-600 w-[400px] mt-6">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit
            amet justo ipsum. Sed accumsan quam vitae est varius fringilla.
            Pellentesque placerat vestibulum lorem sed porta. Nullam mattis
            tristique iaculis. Nullam pulvinar sit amet risus pretium auctor.
            Etiam quis massa pulvinar, aliquam quam vitae, tempus sem. Donec
            elementum pulvinar odio.
          </p>
          <button className="mt-6 text-white bg-green-500 border border-green-500 rounded-md py-2 px-4">
            Learn More
          </button>
        </div>
      </div>
      <div className="flex flex-row gap-20 justify-center bg-[#F5F7FA] p-10 px-32">
        <div>
          <p className="text-5xl font-bold leading-normal ">
            Helping a local <br />
            <span className="text-green-500">business reinvent itself</span>
          </p>
          <p>We reached here with our hard work and dedication</p>
        </div>
        <div>
          <div className="flex flex-row gap-8 mt-4">
            <div className="flex flex-row items-center">
              <img src={Member} alt="members" className="w-12 h-9 mx-4" />
              <div>
                <p className="text-3xl  font-medium">2,245,341</p>
                <p>Members</p>
              </div>
            </div>
            <div className="flex flex-row items-center ">
              <img src={Club} alt="Clubs" className="w-12 h-11 mx-4" />
              <div>
                <p className="text-3xl  font-medium">46, 328</p>
                <p>Clubs</p>
              </div>
            </div>
          </div>
          <div className="flex flex-row gap-8 mt-4">
            <div className="flex flex-row items-center">
              <img src={Event} alt="Events" className="w-12 h-13 mx-4" />
              <div>
                <p className="text-3xl  font-medium">828,867</p>
                <p>Event Bookings</p>
              </div>
            </div>
            <div className="flex flex-row items-center mx-4">
              <img src={Payment} alt="Payment" className="w-12 h-9 mx-4" />
              <div>
                <p className="text-3xl  font-medium">1,926,436</p>
                <p>Payments</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Clients;
