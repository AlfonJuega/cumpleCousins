from tqdm import tqdm
import time
import sys

def typewriter(text, delay=0.1):
    for char in text:
        sys.stdout.write(char)
        sys.stdout.flush()
        time.sleep(delay)
    print()

# Ejemplo de un bucle con barra de progreso
n = 100  # Número de iteraciones
print('')
print('')
contr = input('CONTRASEÑA DE ACCESO: ')
def barra_progreso(n, sleep):
    for i in range(1, n):
        sys.stdout.write('\r' + '-' * i)
        sys.stdout.flush()
        time.sleep(sleep)
barra_progreso(55, 0.15)
print('')

typewriter(' - ANA BERMEJO SARMIENTO', delay=0.15)
time.sleep(1)
typewriter(' - 21 de Agosto de 1998', delay=0.15)
barra_progreso(30,0.25)
print('')
time.sleep(1)
typewriter(' - Cumpleaños reciente ✔', delay=0.15)
barra_progreso(30,0.25)
print('')
typewriter(' - Derecho a regalo ✔', delay=0.15)
barra_progreso(30,0.25)
print('')
print('')
typewriter('   Cargando información del regalo', delay=0.15)

for i in tqdm(range(n), desc='Vídeo' ,leave=False, bar_format='{l_bar}{bar}'):
    # Simular una tarea que tarda un poco en completarse
    time.sleep(0.15)
