import os
import re

def scan_directory(directory):
    for root, _, files in os.walk(directory):
        for file in files:
            if file.endswith(('.tsx', '.css')):
                filepath = os.path.join(root, file)
                try:
                    with open(filepath, 'r', encoding='utf-8') as f:
                        lines = f.readlines()
                except Exception as e:
                    print(f"Error reading {filepath}: {e}")
                    continue

                for i, line in enumerate(lines):
                    line_num = i + 1

                    # 1. Inline styles
                    if 'style={{' in line:
                        print(f"[ESTILO INLINE] {filepath}:{line_num} -> style={{...}} detectado.")

                    # 2. Colors outside palette (bg-gray-, bg-slate-, bg-blue-, etc.)
                    if re.search(r'bg-(gray|slate|blue|zinc|neutral|stone)-\d+', line):
                        match = re.search(r'bg-(gray|slate|blue|zinc|neutral|stone)-\d+', line).group(0)
                        print(f"[COLOR INVÁLIDO] {filepath}:{line_num} -> Se usó {match} fuera de la paleta permitida.")

                    # 3. Default fonts
                    if 'font-sans' in line:
                        print(f"[FUENTE POR DEFECTO] {filepath}:{line_num} -> font-sans detectado, debe configurarse a font-space-grotesk.")

print("Iniciando escaneo de vulnerabilidades estéticas...")
print("-" * 50)
scan_directory('src/app')
scan_directory('src/components')
print("-" * 50)
print("Escaneo completado.")
