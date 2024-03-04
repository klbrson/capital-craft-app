import { AccessAlarm, DeleteForever } from "@mui/icons-material";
import { Button, Container } from "@mui/material";

const Dashboard = () => {
	return (
		<div>
			<header className="App-header">
				<Container maxWidth="lg">
					<p>
						Esasdasdit <code>src/App.tsx</code> and save to reload.
					</p>
					<a
						className="App-link"
						href="https://reactjs.org"
						target="_blank"
						rel="noopener noreferrer"
						>
						Learn React
					</a>
				</Container>
				<Container maxWidth="lg">
					<Button variant="text">Text</Button>
					<Button variant="contained" color='success'>Contained</Button>
					<Button variant="outlined" color='error' endIcon={<AccessAlarm />}>Outlined</Button>
					<Button variant="outlined" startIcon={<DeleteForever />}>
						Delete
					</Button>
		
				</Container>
				
			</header>
		</div>
	)
}

export default Dashboard;