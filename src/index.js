import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import ErrorPage from './pages/ErrorPage';
import Project from './pages/Project';

const router = createBrowserRouter([
	{
		path: '/simplefolio',
		element: <App />,
		errorElement: <ErrorPage />,
	},
	{
		path: '/simplefolio/projects/:projectname',
		element: <Project />,
		errorElement: <ErrorPage />,
	},
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<React.StrictMode>
		<RouterProvider router={router} />
	</React.StrictMode>
);
// <BrowserRouter>
// 	<Routes>
// 		<Route path="simplefolio/" element={<App />}>
// 			{/* <Route index element={<App />} /> */}
// 			<Route path="projects/" element={<App />}>
// 				<Route path=":project" element={<Project />} />
// 			</Route>
// 		</Route>
// 	</Routes>
// </BrowserRouter>

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
