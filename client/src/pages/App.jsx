import { ApolloClient, InMemoryCache, ApolloProvider, createHTTPLink } from "@apollo/client";
import { setContext } from "@apollo/client/link/context";
import { Outlet } from "react-router-dom";
import "./css/style.css";

import NavBarComponent from "./components/Header/Navbar";
import Footer from "./components/Footer";

const httplink = createHTTPLink({ uri: '/graphql'})
