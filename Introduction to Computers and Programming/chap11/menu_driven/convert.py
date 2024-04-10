def menu():
  print("1. Feet to Meters")
  print("2. Inches to Centimeters")
  print("3. Pounds to Kilograms")
  print("4. Miles to Kilometers")
  print("5. Exit")

def feet_to_meters(feet):
  return feet * 0.3048

def inches_to_centimeters(inches):
  return inches * 2.54

def pounds_to_kilograms(pounds):
  return pounds * 0.45359237

def miles_to_kilometers(miles):
  return miles * 1.609344

def main():
  choice = 0
  while choice != 5:
    menu()
    choice = int(input("Enter your choice: "))
    if choice == 1:
      feet = int(input("Enter the length in feet: "))
      print("The length in meters is", feet_to_meters(feet))
    elif choice == 2:
      inches = int(input("Enter the length in inches: "))
      print("The length in centimeters is", inches_to_centimeters(inches))
    elif choice == 3:
      pounds = int(input("Enter the weight in pounds: "))
      print("The weight in kilograms is", pounds_to_kilograms(pounds))
    elif choice == 4:
      miles = int(input("Enter the distance in miles: "))
      print("The distance in kilometers is", miles_to_kilometers(miles))
    elif choice == 5:
      print("Exiting...")
    else:
      print("Invalid choice!")


if __name__ == "__main__":
  main()
