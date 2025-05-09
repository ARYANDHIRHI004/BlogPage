import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { login as authLogin } from "../store/authSlice";
import { useSelector, useDispatch } from "react-redux";
import authService from "../appwrite/auth";
import Input from "./Input";
import Button from "./Button";


const Signup = () => {
  return (
    <div>Signup</div>
  )
}

export default Signup
