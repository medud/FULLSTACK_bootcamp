import random

def get_random_temp(season):
    """Returns a random temperature based on the given season."""
    if season == "winter":
        return round(random.uniform(-10, 16), 1)  
    elif season == "spring":
        return round(random.uniform(5, 25), 1)
    elif season == "summer":
        return round(random.uniform(20, 40), 1)
    elif season == "autumn":
        return round(random.uniform(5, 20), 1)
    else:
        return round(random.uniform(-10, 40), 1)  

def get_season_from_month(month):
    """Returns the season based on the month number."""
    if month in [12, 1, 2]:
        return "winter"
    elif month in [3, 4, 5]:
        return "spring"
    elif month in [6, 7, 8]:
        return "summer"
    elif month in [9, 10, 11]:
        return "autumn"

def main():
    """Main function to get a random temperature and display appropriate messages."""
    month = int(input("Enter the number of the month (1-12): "))
    season = get_season_from_month(month)

    temp = get_random_temp(season)
    print(f"\nThe temperature right now is {temp} degrees Celsius.")

    if temp < 0:
        print("Brrr, that’s freezing! Wear some extra layers today.")
    elif 0 <= temp < 16:
        print("Quite chilly! Don’t forget your coat.")
    elif 16 <= temp < 23:
        print("It's a mild day. A light jacket should be enough.")
    elif 24 <= temp < 32:
        print("Nice and warm! Enjoy the sunshine.")
    elif 32 <= temp <= 40:
        print("It's really hot! Stay hydrated and wear sunscreen.")

main()
