import React, { Fragment } from "react";
import { Tabs, TabList, TabPanel, Tab } from "react-tabs";
import { User, Unlock } from "react-feather";
import {  useNavigate } from "react-router-dom";
import { Button, Form, FormGroup, Input, Label } from "reactstrap";
import { useState } from "react";
import {toast} from 'react-hot-toast';

import axios from 'axios';

const LoginTabset = () => {

	const [data,setData] =  useState(
		{
			name:'',
			email: '',
			password :''
		}
	)
	const history = useNavigate();

	const clickActive = (event) => {
		document.querySelector(".nav-link").classList.remove("show");
		event.target.classList.add("show");
	};

	const routeChange = () => {
		history(`${process.env.PUBLIC_URL}/dashboard`);
	};

	const registerUser = async (e) => {
		e.preventDefault()
		const {name,email,password} = data
		try{
    const {data} = await axios.post('/register' , {
		name ,email , password
	})
	if(data.error){
		toast.error(data.error)
	}else {
		setData({})
		toast.success('Login Succesful Welcome')
		routeChange()
	}
		}catch(error){
             console.log(error)
		}
	}

	const loginUser = async(e) => {
		e.preventDefault()
		const {email,password} = data
		try{
			const {data} = await axios.post('./login', {
				email,password
			});

			if(data.error){
				toast.error(data.error)
			}else{
				setData({});
				routeChange()
			}
		}catch(error){

		}
	}
	return (
		<div>
			<Fragment>
				<Tabs>
					<TabList className="nav nav-tabs tab-coupon">
						<Tab className="nav-link" onClick={(e) => clickActive(e)}>
							<User />
							Login
						</Tab>
						<Tab className="nav-link" onClick={(e) => clickActive(e)}>
							<Unlock />
							Register
						</Tab>
					</TabList>

					<TabPanel>


						//login 
						<Form className="form-horizontal auth-form"  onSubmit={loginUser}>
							<FormGroup>
								<Input
									required=""
									name="login[email]"
									type="email"
									className="form-control"
									placeholder="enter email"
									id="exampleInputEmail1"
									value={data.email} 
									onChange={(e) => setData({...data,email:e.target.value})}
								/>
							</FormGroup>
							<FormGroup>
								<Input
									required=""
									name="login[password]"
									type="password"
									className="form-control"
									placeholder="Password"
									value={data.password} 
									onChange={(e) => setData({...data,password:e.target.value})}
								/>
							</FormGroup>
							<div className="form-terms">
								<div className="custom-control custom-checkbox me-sm-2">
									<Label className="d-block">
										<Input
											className="checkbox_animated"
											id="chk-ani2"
											type="checkbox"
										/>
										Reminder Me{" "}
										<span className="pull-right">
											{" "}
											<a href="/#" className="btn btn-default forgot-pass p-0">
												lost your password
											</a>
										</span>
									</Label>
								</div>
							</div>
							<div className="form-button">
								<Button
									color="primary"
									type="submit"
									onClick={loginUser}
								>
									Login
								</Button>
							</div>
							<div className="form-footer">
								<span>Or Login up with social platforms</span>
								<ul className="social">
									<li>
										<a href="/#">
											<i className="icon-facebook"></i>
										</a>
									</li>
									<li>
										<a href="/#">
											<i className="icon-twitter-alt"></i>
										</a>
									</li>
									<li>
										<a href="/#">
											<i className="icon-instagram"></i>
										</a>
									</li>
									<li>
										<a href="/#">
											<i className="icon-pinterest-alt"></i>
										</a>
									</li>
								</ul>
							</div>
						</Form>
					</TabPanel>
					<TabPanel>

						//sign up
						<Form className="form-horizontal auth-form" onSubmit={registerUser}>
							<FormGroup>
								<Input
									required=""
									name="login[username]"
									type="email"
									className="form-control"
									placeholder="Username"
									id="exampleInputEmail12"
									value={data.name} 
									onChange={(e) => setData({...data,name:e.target.value})}
								/>
							</FormGroup>
							<FormGroup>
								<Input
									required=""
									name="login[email]"
									type="email"
									className="form-control"
									placeholder="email"
									value={data.email} 
									onChange={(e) => setData({...data,email:e.target.value})}
								/>
							</FormGroup>
							<FormGroup>
								<Input
									required=""
									name="login[password]"
									type="password"
									className="form-control"
									placeholder="password"
									value={data.password} 
									onChange={(e) => setData({...data,password:e.target.value})}
								/>
							</FormGroup>
							<div className="form-terms">
								<div className="custom-control custom-checkbox me-sm-2">
									<Label className="d-block">
										<Input
											className="checkbox_animated"
											id="chk-ani2"
											type="checkbox"
										/>
										I agree all statements in{" "}
										<span>
											<a href="/#">Terms &amp; Conditions</a>
										</span>
									</Label>
								</div>
							</div>
							<div className="form-button">
								<Button
									color="primary"
									type="submit"
									onClick={registerUser}
								>
									Register
								</Button>
							</div>
							<div className="form-footer">
								<span>Or Sign up with social platforms</span>
								<ul className="social">
									<li>
										<a href="/#">
											<i className="icon-facebook"></i>
										</a>
									</li>
									<li>
										<a href="/#">
											<i className="icon-twitter-alt"></i>
										</a>
									</li>
									<li>
										<a href="/#">
											<i className="icon-instagram"></i>
										</a>
									</li>
									<li>
										<a href="/#">
											<i className="icon-pinterest-alt"></i>
										</a>
									</li>
								</ul>
							</div>
						</Form>
					</TabPanel>
				</Tabs>
			</Fragment>
		</div>
	);
};

export default LoginTabset;
