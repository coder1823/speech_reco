frappe.pages['food-dashboard'].on_page_load = function(wrapper) {
	var page = frappe.ui.make_app_page({
		parent: wrapper,
		single_column: true
	});
	var htmlContent = `
	<style>
	
	/* Center the cards on the page */
	body {
		display: flex;
		justify-content: center;
		align-items: center;
		height: 100vh;
		margin: 0;
	}
	.navbar.navbar-expand.sticky-top {
		display: none;
	}	

	/* Style for the cards */
	.card {
		border: 2px solid #3498db; /* Blue border color */
		border-radius: 10px;
		padding: 30px;
		margin: 20px;
		width: 300px;
		text-align: center;
		box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
		background-color: #fff;
		transition: transform 0.3s ease-in-out; /* Add a smooth transition on hover */
	}

	/* Style for the card titles */
	.card-title {
		font-size: 24px;
		font-weight: bold;
		color: #3498db; /* Blue text color */
	}

	/* Hover effect for the cards */
	.card:hover {
		transform: scale(1.05); /* Enlarge the card on hover */
		box-shadow: 0 12px 20px rgba(0, 0, 0, 0.3);
	}
</style>

<!-- Food Card -->
<div class="card">
	<div class="card-title">Food</div>
</div>

<!-- Snacks Card -->
<div class="card">
	<div class="card-title">Snacks</div>
</div>
`;
	
$(htmlContent).appendTo(page.body);
}