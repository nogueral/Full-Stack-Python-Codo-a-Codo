dia_de_semana = "lunes"
fin_de_semana = "domingo"

apellido = "Fernandez"
print(apellido[0])
#las cadenas de caracteres tienen posiciones
print(len(apellido))
print(apellido[len(apellido)-1])

entrada = input("Ingrese su nombre: ")
primer_caracter = entrada[0]
largo_cadena = len(entrada)
ultimo_caracter = entrada[-1] #se puede enumerar de atras para adelante
print("Informe: ")
print("Primer caracter: ", primer_caracter)
print("Largo: ", largo_cadena)
print("Ultimo caracter: ", ultimo_caracter)
print(entrada.lower())
print(entrada.upper())
print(entrada.capitalize())
