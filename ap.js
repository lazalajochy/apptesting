frappe.ui.form.on('testing','pais', function(frm) {
	if(frm.doc.pais == "RD")
	{
		set_field_options("provinceorstate",[" ", "Azúa", "Baoruco", "Barahona", "Dajabón", "Distrito Nacional"
											,"Duarte", "Elías Pina", "El Seibo", "Espaillat", "Hato Mayor", "Independencia",
											"La Altagracia", "La Romana", "La Vega", "Maria Trinidad Sanchez", "Monseñor Nouel",
											"Monte Cristi", "Monte Plata", "Pedernales", "Peravia", "Puerto Plata", "Salcedo",
											"Samana", "Sánchez Ramírez", "San Cristobal", "San Jose de Ocoa", "San Juan", 
											"San Pedro de Macorís", "Santiago", "Santiago Rodríguez", "Santo Domingo", "Valverde"])
	}
	else if(frm.doc.pais == "USA")
	{
		set_field_options("provinceorstate",[" ","Alabama","Alaska","Arizona","Arkansas","California","Colorado","Connecticut",
										    "Delaware","Florida","Georgia","Hawaii","Idaho","Illinois","Indiana","Iowa","Kansas",
											"Kentucky","Louisiana","Maine","Maryland","Massachusetts","Michigan","Minnesota","Mississippi",
											"Missouri","Montana","Nebraska","Nevada","New Hampshire","New Jersey","New Mexico","New York",
											"North Carolina","North Dakota","Ohio","Oklahoma","Oregon","Pennsylvania","Rhode Island","South Carolina",
											"South Dakota","Tennessee","Texas","Utah","Vermont","Virginia","Washington","West Virginia","Wisconsin","Wyoming"])
	}
	

});
