import React from 'react';
import { AiOutlineLogin } from 'react-icons/ai';
import { FiEdit } from 'react-icons/fi';
import { BsPerson, BsCardChecklist } from 'react-icons/bs';
import { IoMdContacts } from 'react-icons/io';
import { RiContactsLine } from 'react-icons/ri';
import {  GiArchiveRegister } from 'react-icons/gi';

export const links = [
    {
      title: 'Dashboard',
      links: [
        {
          name: 'Homepage',
          icon: <BsPerson />,
        },
      ],
    },
  
    {
      title: 'Pages',
      links: [
        {
          name: 'listings',
          icon: <BsCardChecklist />,
        },
        {
          name: 'applicants',
          icon: <IoMdContacts />,
        },
        {
          name: 'status',
          icon: <RiContactsLine />,
        },
      ],
    },
    {
      title: 'Forms',
      links: [
        {
          name: 'Login',
          icon: <AiOutlineLogin />,
        },
        {
          name: 'Register',
          icon: <GiArchiveRegister />,
        },
        {
          name: 'Post Job',
          icon: <FiEdit />,
        }
      ],
    },
  ];

  export const applicantsGrid = [
    // {
    //   headerText: 'Profile',
    //   template: gridOrderImage,
    //   textAlign: 'Center',
    //   width: '120',
    // },
    {
      field: 'listing_id',
      headerText: 'Job Id',
      // width: '150',
      editType: 'dropdownedit',
      textAlign: 'Center',
    },
    { field: 'name',
      headerText: 'Applicant Name',
      // width: '150',
      textAlign: 'Center',
    },
    {
      field: 'email',
      headerText: 'Email',
      format: 'C2',
      textAlign: 'Center',
      editType: 'numericedit',
      // width: '150',
    },
    {
      headerText: 'Job Title',
      // template: gridOrderStatus,
      field: 'listing.title',
      textAlign: 'Center',
      // width: '1200',
    },
    {
      field: 'created_at',
      headerText: 'Applied At',
      // width: '150',
      textAlign: 'Center',
    },
  
    // {
    //   field: 'Location',
    //   headerText: 'Location',
    //   width: '150',
    //   textAlign: 'Center',
    // },
  ];

  export const listings = 
    {
      "status": true,
      "message": "Retrieved all the listings successfully",
      "body": {
          "listings": [
              {
                  "id": 1,
                  "user_id": 2,
                  "title": "Frontend Software Developer",
                  "company": "Josh Inc.",
                  "location": "Gurgaon",
                  "website": "www.joshinc.com",
                  "email": "joshinc@email.com",
                  "description": "A Frontend developer with 2+ year of experience in ReactJS and a strong understanding of DOM Manipulation. Knowledge of QWERTY is a plus.",
                  "tags": "frontend,developer"
              },
              {
                  "id": 1,
                  "user_id": 2,
                  "title": "Frontend Software Developer",
                  "company": "Josh Inc.",
                  "location": "Gurgaon",
                  "website": "www.joshinc.com",
                  "email": "joshinc@email.com",
                  "description": "A Frontend developer with 2+ year of experience in ReactJS and a strong understanding of DOM Manipulation. Knowledge of QWERTY is a plus.",
                  "tags": "frontend,developer"
              },
              {
                  "id": 2,
                  "user_id": 2,
                  "title": "Backend Software Developer",
                  "company": "Josh2 Inc.",
                  "location": "Gurgaon",
                  "website": "www.joshinc.com",
                  "email": "joshinc@email.com",
                  "description": "A Backend developer with 2+ year of experience in NodeJS and a strong understanding of NoSQL Manipulation. Knowledge of QWERTY is a plus.",
                  "tags": "frontend,developer"
              },
              {
                  "id": 2,
                  "user_id": 2,
                  "title": "Backend Software Developer",
                  "company": "Josh2 Inc.",
                  "location": "Gurgaon",
                  "website": "www.joshinc.com",
                  "email": "joshinc@email.com",
                  "description": "A Backend developer with 2+ year of experience in NodeJS and a strong understanding of NoSQL Manipulation. Knowledge of QWERTY is a plus.",
                  "tags": "frontend,developer"
              },
          ]
      }
  }
  

  export const applicantStatic = {
    "status": true,
    "message": "Retrieved all the listings successfully",
    "body": {
        "applicants": [
            {
                "id": 1,
                "listing_id": 1,
                "user_id": 2,
                "name": "Apoorv Pandey",
                "resume": "resume/jtOq9P5USQjlMrnq8wny6EPKf6IpOofDjEBuwLJU.pdf",
                "email": "apandey@gmail.com",
                "phone": "989789343",
                "comments": "I would really like to join your company. I have 3+ years of experience as a Software Developer.",
                "deleted_at": null,
                "created_at": "2022-09-12T10:41:29.000000Z",
                "updated_at": "2022-09-12T10:41:29.000000Z",
                "listing": {
                    "id": 1,
                    "user_id": 2,
                    "title": "Frontend Software Developer",
                    "logo": null,
                    "tags": "frontend,developer",
                    "company": "Josh Inc.",
                    "location": "Gurgaon",
                    "email": "joshinc@email.com",
                    "website": "www.joshinc.com",
                    "description": "A Frontend developer with 2+ year of experience in ReactJS and a strong understanding of DOM Manipulation. Knowledge of QWERTY is a plus.",
                    "max_applicants": 4,
                    "schedule_status": "active",
                    "schedule_start-date": "2022-10-10",
                    "schedule_end-date": "2022-10-10",
                    "visible_active": 1,
                    "deleted_at": null,
                    "created_at": "2022-09-09T11:23:42.000000Z",
                    "updated_at": "2022-09-09T11:23:42.000000Z"
                }
            },
            {
                "id": 2,
                "listing_id": 1,
                "user_id": 2,
                "name": "Apoorv Pandey",
                "resume": "resume/jocy7Ap69cpplGWmrxKXaSXKiuBgsMp7bw5Wowyi.pdf",
                "email": "apandey@gmail.com",
                "phone": "989789343",
                "comments": "I would really like to join your company. I have 3+ years of experience as a Software Developer.",
                "deleted_at": null,
                "created_at": "2022-09-12T10:42:41.000000Z",
                "updated_at": "2022-09-12T10:42:41.000000Z",
                "listing": {
                    "id": 1,
                    "user_id": 2,
                    "title": "Frontend Software Developer",
                    "logo": null,
                    "tags": "frontend,developer",
                    "company": "Josh Inc.",
                    "location": "Gurgaon",
                    "email": "joshinc@email.com",
                    "website": "www.joshinc.com",
                    "description": "A Frontend developer with 2+ year of experience in ReactJS and a strong understanding of DOM Manipulation. Knowledge of QWERTY is a plus.",
                    "max_applicants": 4,
                    "schedule_status": "active",
                    "schedule_start-date": "2022-10-10",
                    "schedule_end-date": "2022-10-10",
                    "visible_active": 1,
                    "deleted_at": null,
                    "created_at": "2022-09-09T11:23:42.000000Z",
                    "updated_at": "2022-09-09T11:23:42.000000Z"
                }
            },
            {
                "id": 3,
                "listing_id": 1,
                "user_id": 2,
                "name": "Apoorv Pandey",
                "resume": "resume/GqDTeVlz7WzjKjuT8lfmVleV6lGlUkmhmz5mYiSy.pdf",
                "email": "apandey@gmail.com",
                "phone": "989789343",
                "comments": "I would really like to join your company. I have 3+ years of experience as a Software Developer.",
                "deleted_at": null,
                "created_at": "2022-09-13T05:14:51.000000Z",
                "updated_at": "2022-09-13T05:14:51.000000Z",
                "listing": {
                    "id": 1,
                    "user_id": 2,
                    "title": "Frontend Software Developer",
                    "logo": null,
                    "tags": "frontend,developer",
                    "company": "Josh Inc.",
                    "location": "Gurgaon",
                    "email": "joshinc@email.com",
                    "website": "www.joshinc.com",
                    "description": "A Frontend developer with 2+ year of experience in ReactJS and a strong understanding of DOM Manipulation. Knowledge of QWERTY is a plus.",
                    "max_applicants": 4,
                    "schedule_status": "active",
                    "schedule_start-date": "2022-10-10",
                    "schedule_end-date": "2022-10-10",
                    "visible_active": 1,
                    "deleted_at": null,
                    "created_at": "2022-09-09T11:23:42.000000Z",
                    "updated_at": "2022-09-09T11:23:42.000000Z"
                }
            }
        ]
    }
}
