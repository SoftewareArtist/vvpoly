import React from "react"
import { useNavigate } from "react-router-dom"
import { Container, AppBar, Box, Divider, Button } from "@mui/material"
import { useWeb3Modal } from "@web3modal/react"


const DesktopNavbar = () => {
	const navigate = useNavigate()
	// const { } = useWalletClient()
	const  {open } = useWeb3Modal()

	return (
		<AppBar
			position="sticky"
			elevation={0}
			// position="top"
			sx = {{
				bgcolor:"#fff",
				zIndex: (theme) => theme.zIndex.drawer + 1
			}}
		>
			<Container maxWidth = {false}>
				<Box display={"flex"} alignItems={"center"} justifyContent={"space-between"}>
					<Box
						sx = {{ cursor:"pointer"}}
						component={"img"}
						style={{ height: 60, width:"auto" }}
						onClick={() => navigate("/")}
						src="/media/logo/velocity-vote-logo.png"
						alt="logo"
					/>
				
					<Button variant="contained" onClick={open}>Disconnect</Button>
				</Box>
			</Container>
			<Divider />
		</AppBar>
	)
}

export default DesktopNavbar
