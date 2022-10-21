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