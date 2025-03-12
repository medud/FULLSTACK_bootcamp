brand={"name": "Zara",
"creation_date": 1975,"creator_name": "Amancio Ortega Gaona",
"type_of_clothes": ["men,women,children,home"],
"international_competitors": ["Gap", "H&M", "Benetton"], "number_stores": 7000,
"major_color": {"France": "blue","Spain": "red","US": ["pink", "green"]}}
brand["number_stores"]=2
print(f"Zara's clients are {', '.join(brand['type_of_clothes'])}.")