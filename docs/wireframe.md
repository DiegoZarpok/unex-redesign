# Wireframe e planejamento do redesign

## Decisões de UX

| Seção original | Decisão no redesign | Justificativa |
|---|---|---|
| Menu com 6 itens + submenus profundos | Reduzir para 5 itens principais, sem submenu visível | Simplifica navegação, essencial no mobile |
| Texto institucional longo antes dos cursos | Reduzir para 2-3 linhas no Hero | Reduz tempo até a informação relevante |
| Múltiplos CTAs concorrendo | 1 CTA primário (botão sólido) + CTAs secundários | Cria hierarquia visual clara |
| Cursos em cards simples | Cards com hover, animação e ícone por área | Melhora escaneabilidade e engajamento |
| Depoimentos em lista | Carrossel leve | Preserva prova social com menos espaço vertical |
| Unidades (4 cidades) | Grid de cards com endereço e cursos em destaque | Mantém clareza, estilo consistente |
| Footer com muitos links | Colunas temáticas (Institucional / Cursos / Contato) | Facilita escaneabilidade |

## Estrutura de seções (wireframe em texto)

1. Header — logo, menu (5 itens), CTA "Inscreva-se", menu hambúrguer no mobile
2. Hero — título, subtítulo curto, CTA primário, imagem/ilustração
3. About — missão institucional em 2-3 parágrafos curtos
4. Courses — grid de cards (Medicina, Direito, Odontologia, Enfermagem, etc.)
5. Testimonials — carrossel com 2-3 depoimentos
6. Campuses — grid das 4 unidades (Feira de Santana, Itabuna, Jequié, Vitória da Conquista)
7. Blog/News — 3 cards de notícias em destaque
8. ContactForm — nome, e-mail, telefone, curso de interesse, botão enviar
9. Footer — colunas (Institucional, Cursos, Contato, redes sociais)

## Componentização planejada

Cada seção acima corresponde a uma pasta em `components/`, mantendo 1:1 entre wireframe e código.