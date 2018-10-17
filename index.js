(() => {

  const messages = [
    'https://m.facebook.com/story.php?story_fbid=328192384600831&id=1101124169903040',
    'https://www.facebook.com/enioverri/videos/1145668628896545/?hc_ref=ARSLC5WF-ITtorxFruUE-vBbJcBUWZdQ0mSlsg0VIjfi7erDEzY258J7Ak3W7PIPuYE&__xts__[0]=68.ARBmzJMS6NMJhjW-yTW1KW-4SRZBX0fgxioptzHEsxTfVS-jU8VTsXWhXkhzPazaUC6m_pakO2hSKLC2fOB0z3d_0hdxIU77PV0BdyWMi00ZeU5ZX-QF7hZ-5wYUa3i9aegvYH6RPWiUPJa43TKCap63x31mpFl6Mo1--L3ioC2zAEv0Y-Jkstue4QXb7rOgPw8gaNl3QVlZcxOxNrbv4lc&__tn__=FC-R',
    'https://brasil.elpais.com/brasil/2018/10/06/opinion/1538852257_174248.html',
    'https://www.terra.com.br/noticias/brasil/nao-ha-base-para-parceria-estrategica-se-bolsonaro-vencer,df9930ce33e6fd15c6d395f8396276e648ra7ch6.html?fbclid=IwAR1VEOo394pQJccbviAnrDhghqJLmfMs6r_LiXOTCyvYlwwFaZyAUOoHYXk',
    'https://istoe.com.br/bolsonaro-o-candidato-fake/?fbclid=IwAR2hJg9T0g4VA48C-HNMjvHgdlPQfV4NvaPhdaPpicWb-Cwp_c8LzJQdepI',
    'https://oglobo.globo.com/economia/pib-do-brasil-ultrapassa-do-reino-unido-pais-se-torna-6-economia-do-mundo-3513784?utm_source=Facebook&utm_medium=Social&utm_campaign=compartilhar&fbclid=IwAR2nfmPO4tH0XNQumfWiVnsGqBKaDh-tTS0une2bpED8TJ-viRniUsdo8iw',
    'https://catracalivre.com.br/cidadania/sou-homofobico-sim-com-muito-orgulho-diz-bolsonaro-em-video/',
    'https://www.youtube.com/watch?v=9TiqyO5JQZs',
    'https://www.facebook.com/gislaine.almeida.1272/posts/1882563988491564',
    'https://www.youtube.com/watch?v=8bX7EdK0-1M',
    'https://brasil.elpais.com/brasil/2018/10/08/politica/1539001055_896195.html?fbclid=IwAR3AEZm_Kn9fgHFVue_sx2X8fuEdwYmFJQ7wApGW9qEWyQjBbPmXQrwc0g4',
    'https://www.facebook.com/audreysantb/posts/10209910935769885',
    'https://www.facebook.com/talita.ferraz.77/posts/2306757699352557',
    'https://theintercept.com/2018/09/20/bolsonaro-economia/?fbclid=IwAR3XdsJaULagK1hZQnHtm_v-BWf4rGKw04_7SrE2uhVjCS2d1D55A5HBDAs',
    'https://www.facebook.com/emilio.leroux/videos/10215426805917827/',
    'https://aosfatos.org/noticias/checamos-declaracoes-de-bolsonaro-no-jornal-nacional-e-na-globonews/',
    'https://aosfatos.org/noticias/checamos-entrevista-de-bolsonaro-ao-datena-na-band/',
    'https://aosfatos.org/noticias/e-falso-que-haddad-criou-kit-gay-para-criancas-de-seis-anos/',
    'https://aosfatos.org/noticias/checamos-o-que-disse-jair-bolsonaro-na-primeira-semana-apos-o-primeiro-turno/',
    'https://aosfatos.org/noticias/bolsonaro-nao-foi-eleito-o-politico-mais-honesto-do-mundo/',
    'https://www.midiamax.com.br/politica/2018/jornal-americano-coloca-bolsonaro-com-hitler-em-charge/',
    'https://www.facebook.com/BuzzFeedNewsBR/videos/253665021842579/?hc_ref=ARRIhyEKpwz6hYXIVpaaGZDrtNKmCH5O6_vMf89UXKf3_EYMOzQcMtcgDwu4bTdaTEY&__xts__[0]=68.ARCI9j87rSdJYn-JHMUuC1UUdc5Hmsd73heAy-1i16NqqXyz3AaS5Vcu3pThTY1TeIkY0fZMbx5GzkIRSewLVomWkACdjt-WC-gr9jioMwhhnOPa_N8UMidJn2J_4hW6jayngX4s2wBaqx_R0ZpY8Bckl4Z85CL8U1cypwvL5zUSYLt2oLeBNeHXesKwQKvwDym1FB_uX_dMKQpcJRn0Ubfy&__tn__=FC-R',
    'https://www.facebook.com/quebrandootabu/videos/148211936118288/?hc_ref=ART2iDID6gs0QJEwEPArCIM_V6qhHgYyk4-k0s_S8wpFD7kckeY8UAjW5TjCEP0L-Cs&__xts__[0]=68.ARDRGko8cGibwBi1xQBIeU5oS_U6_f2HILwduvxpoFxId_dFTJmtrKcyJhmtfqyRDCdDK4ZGs4rlMtp1CHV_9SvWAezCFyyeg0UF5MgKUZ1dzsPMT342Qo5EPq_TfiK2ie4mf6_cRI2zC8SaSm1rQBvYnn5w4OmpqAgGmXANI4_S9ZxEDpl2QhPqsdB5qtf2HgiqQEWBlM6Sq4OQYtjWZzk&__tn__=FC-R',
    'https://www.facebook.com/quebrandootabu/videos/1897858296937215/?hc_ref=ART0qJtfNce1j7rQVJ9x9AWESbS9dd-eTutZJr0n4Rk9djd6tYFzBo7_jInsJ2ZoUMg&__xts__[0]=68.ARCGvcWT86pEODRWnmw7hxfBbD3c-X792_9k-IzvZrYr2t46Um1Ri1lBFSZgVMbqzGig4uzh8sWbmfWfHrxEfTsN_y0AfbXinv7JdrfFFm5EUWFRtWJ2btVyvMHpPKSPJPZalkgW1GypmMV22Rse0981L6LmG0a5MuonO0Ist8rJqvY11aJ9olWnkV8pZsyCb3_thb0bdEXDyqJDfQxG0d0&__tn__=FC-R',
    'https://brasil.elpais.com/brasil/2018/10/06/politica/1538859277_033603.html?id_externo_rsoc=FB_BR_CM&fbclid=IwAR0Ygdx1HnXJubQp-IrQUAJqfpt0XgpSCoFhuIaXB2tH9Suy11EYWguOkyI',
    'https://www.metropoles.com/brasil/politica-br/site-do-tse-mostra-que-bolsonaro-recebeu-doacao-da-jbs',
    'https://www.gazetaonline.com.br/noticias/politica/…aro-deputado-confessou-caixa-dois-1014134496.html',
    'https://oglobo.globo.com/brasil/apos-polemica-bols…oradia-ocupa-imovel-funcional-22811602?versao=amp',
    'https://www1.folha.uol.com.br/poder/2018/09/jair-b…araty-para-resolver-assunto-pessoal-em-2011.shtml',
    'https://oglobo.globo.com/brasil/bolsonaro-empregou-ex-mulher-parentes-dela-no-legislativo-22143135',
    'https://oglobo.globo.com/brasil/alem-de-ex-bolsonaro-tambem-nomeou-atual-mulher-na-camara-22165751',
    'https://www.oantagonista.com/brasil/bolsonaro-empregou-ex-mulher-ex-sogro-no-legislativo/',
    'https://congressoemfoco.uol.com.br/especial/notici…olsonaro-demite-assessora-apontada-como-fantasma/',
    'https://oglobo.globo.com/rio/deputado-entrou-com-m…para-pescar-em-estacao-ecologica-de-angra-8405069',
    'https://veja.abril.com.br/blog/o-leitor/e-o-comeco-do-fim-de-bolsonaro/',
    'https://www.opovo.com.br/noticias/politica/2018/01…ro-e-filhos-se-multiplica-em-apenas-dez-anos.html',
    'https://ultimosegundo.ig.com.br/politica/2018-01-07/jair-bolsonaro-patrimonio-familia.html',
    'https://www1.folha.uol.com.br/mercado/2018/09/como…o-defende-privilegios-e-eleva-gasto-publico.shtml',
    'https://noticias.uol.com.br/politica/ultimas-notic…-que-apoiaram-a-votacao-do-aumento-de-salario.htm',
    'https://www1.folha.uol.com.br/fsp/1996/2/17/brasil/14.html',
    'https://epocanegocios.globo.com/Brasil/noticia/201…i-contra-reformas-e-plano-que-domou-inflacao.html',
    'https://exame.abril.com.br/economia/descubra-como-…nadores-votaram-nos-ultimos-quatro-anos-m0064180/',
    'https://www.bbc.com/portuguese/amp/brasil-42231485',
    'https://imirante.com/brasil/noticias/2005/04/13/bo…onaro-ironiza-fim-do-nepotismo-e-as-amantes.shtml',
    'http://www.camara.leg.br/internet/sitaqweb/TextoHT…rto=15:00&txEtapa=Com%20reda%C3%A7%C3%A3o%20final',
    'https://politica.estadao.com.br/noticias/geral,bol…dois-projetos-em-26-anos-de-congresso,70001900653',
    'https://congressoemfoco.uol.com.br/especial/notici…jetos-dificultam-atendimento-a-vitima-de-estupro/',
    'https://veja.abril.com.br/politica/ex-mulher-relat…amaraty-ameaca-de-morte-por-bolsonaro-diz-jornal/',
    'https://www1.folha.uol.com.br/poder/2018/09/brasil…lsonaro-diz-nao-entender-apoio-ao-candidato.shtml',
    'https://www1.folha.uol.com.br/poder/2018/06/bolson…cao-de-pobres-para-combater-miseria-e-crime.shtml',
    'https://veja.abril.com.br/politica/bolsonaro-defendeu-reducao-da-licenca-maternidade/',
    'https://www.youtube.com/watch?v=QJNy08VoLZs',
    'https://youtu.be/VpqsHe02uLE',
    'https://medium.com/@lcaramori/bolsonaro-o-pior-candidato-para-as-mulheres-3ae301b56196',
    'https://congressoemfoco.uol.com.br/especial/notici…bolsonaro-quilombola-nao-serve-nem-para-procriar/',
    'https://twitter.com/pirockstar/status/1041370727595819008?s=21',
    'http://www2.camara.leg.br/atividade-legislativa/pl…ao/mostraVotacao.asp?ideVotacao=6117&tipo=partido',
    'https://oglobo.globo.com/brasil/bolsonaro-quer-aca…de-terras-flagradas-com-trabalho-escravo-22978658',
    'https://www.youtube.com/watch?v=54KUDU-u1P0',
    'https://www.youtube.com/watch?v=l93cCm2GToo',
    'https://super.abril.com.br/mundo-estranho/retrato-falado-coronel-ustra-o-mestre-das-torturas/',
    'https://www.bbc.com/portuguese/noticias/2016/04/160419_torturado_ustra_bolsonaro_lgb',
    'https://www.gazetadopovo.com.br/ideias/quem-foi-br…orturador-pela-justica-504br0rhl21rxfxsjkqjygv79/',
    'https://www.youtube.com/watch?v=o3ZBeX9uC8s',
    'https://aosfatos.org/noticias/critico-do-programa-bolsonaro-se-contradiz-ao-defender-bolsa-familia/',
    'https://aosfatos.org/noticias/entre-ampliar-ou-cor…ia-bolsonaro-muda-de-opiniao-em-apenas-dois-dias/',
    'https://veja.abril.com.br/blog/noblat/a-conversao-de-bolsonaro-a-democracia/',
    'https://aosfatos.org/noticias/bolsonaro-erra-dados…s-nos-eua-reforma-da-previdencia-e-meio-ambiente/',
    'http://cbn.globoradio.globo.com/media/audio/219685…itima-daquilo-que-prego-diz-bolsonaro-sobre-f.htm',
    'https://oglobo.globo.com/brasil/cnj-afasta-juiz-qu…a-recolher-urnas-na-vespera-das-eleicoes-23112437',
    'https://www.conjur.com.br/dl/cnj-afasta-juiz-planejava-atrapalhar.pdf',
    'https://jovempan.uol.com.br/eleicoes-2018/presiden…ado-diferente-da-minha-eleicao-diz-bolsonaro.html',
    'https://www.youtube.com/watch?v=-fMdCwlwg8E',
    'https://youtu.be/ZBo-Vh5YARU',
    'https://www.zeit.de/politik/ausland/2017-07/brasil…ilva-jair-bolsonaro-petrobras-sergio-moro/seite-3',
    'https://www.lanacion.com.ar/2155398-mano-dura-y-me…tm_source=FB&utm_medium=Cali&utm_campaign=2155398',
    'https://www.iol.co.za/sundayindependent/internatio…lian-women-march-against-misogynist-ways-17273983',
    'https://diepresse.com/home/ausland/aussenpolitik/5…Haft-und-der-TropenTrump?from=suche.intern.portal',
    'https://www.smh.com.au/world/south-america/why-som…t-flamethrower-for-president-20181002-p507cs.html',
    'https://www.lacuarta.com/mundo/noticia/jair-bolsonaro-polemico-trump-brasileno/289356/',
    'https://www.elconfidencial.com/mundo/2018-07-27/ja…sonaro-le-pen-tropical-presidente-brasil_1597884/',
    'https://www.foxnews.com/world/a-look-at-offensive-comments-by-brazil-candidate-bolsonaro',
    'https://www.lemonde.fr/ameriques/article/2018/08/2…-jair-bolsonaro-assume-sa-ligne_5347661_3222.html',
    'https://www.volkskrant.nl/nieuws-achtergrond/honde…traat-op-tegen-extreemrechts-hij-nooit-~b3e115aa/',
    'https://indianexpress.com/article/world/let-police…il-presidential-candidate-jair-bolsonaro-5331950/',
    'https://ricerca.repubblica.it/repubblica/archivio/…nti-gay-che-da-lassalto-brasile16.html?ref=search',
    'http://www.eluniversal.com.mx/mundo/militar-de-ultraderecha-un-voto-por-el-pasado',
    'http://opais.sapo.mz/milhares-protestaram-contra-o-principal-candidato-eleitoral-do-brasil',
    'https://larepublica.pe/politica/1328210-editorial-republica-brasil-resiste',
    'https://www.publico.pt/2018/09/28/mundo/editorial/bolsonaro-o-jagunco-a-porta-do-planalto-1845536',
    'https://www.aljazeera.com/news/2018/09/brazil-thousands-women-rally-bolsonaro-180929231001428.html',
    'https://www.economist.com/leaders/2018/09/20/jair-bolsonaro-latin-americas-latest-menace',
    'https://www.nzz.ch/international/der-rassistische-saubermann-ld.1352160',
    'https://www.zeit.de/politik/ausland/2017-07/brasilien-lula-da-silva-jair-bolsonaro-petrobras-sergio-moro/seite-3',
    'https://www.lanacion.com.ar/2155398-mano-dura-y-mesianismo-bolsonaro-el-candidato-mas-temido-se-lanzo-en-brasil?utm_source=FB&utm_medium=Cali&utm_campaign=2155398',
    'https://www.iol.co.za/sundayindependent/international/brazilian-women-march-against-misogynist-ways-17273983',
    'https://www.smh.com.au/world/south-america/why-some-in-brazil-are-warming-to-a-far-right-flamethrower-for-president-20181002-p507cs.html',
    'https://www.elconfidencial.com/mundo/2018-07-27/jair-bolsonaro-le-pen-tropical-presidente-brasil_1597884/',
    'https://www.lemonde.fr/ameriques/article/2018/08/29/bresil-le-candidat-d-extreme-droite-jair-bolsonaro-assume-sa-ligne_5347661_3222.html',
    'https://www.volkskrant.nl/nieuws-achtergrond/honderdduizenden-vrouwen-in-brazilie-de-straat-op-tegen-extreemrechts-hij-nooit-~b3e115aa/',
    'https://indianexpress.com/article/world/let-police-kill-criminals-says-brazil-presidential-candidate-jair-bolsonaro-5331950/',
    'https://drive.google.com/file/d/1uXw4Fg4VEQk2vJpqaDbO-yq9PCwzymeT/view',
    'https://www.bbc.com/portuguese/amp/brasil-42231485',
    'https://imirante.com/brasil/noticias/2005/04/13/bolsonaro-ironiza-fim-do-nepotismo-e-as-amantes.shtml',
    'https://epocanegocios.globo.com/Brasil/noticia/2017/11/apesar-do-atual-aceno-liberal-bolsonaro-foi-contra-reformas-e-plano-que-domou-inflacao.html',
    'https://www1.folha.uol.com.br/fsp/1996/2/17/brasil/14.html',
    'http://www.camara.leg.br/internet/sitaqweb/TextoHTML.asp?etapa=3&nuSessao=002.1.52.O&nuQuarto=31&nuOrador=1&nuInsercao=0&dtHorarioQuarto=15:00&sgFaseSessao=PE%20%20%20%20%20%20%20%20&Data=19/02/2003&txApelido=JAIR%20BOLSONARO&txFaseSessao=Pequeno%20Expediente%20%20%20%20%20%20%20%20%20%20%20%20&dtHoraQuarto=15:00&txEtapa=Com%20reda%C3%A7%C3%A3o%20final',
    'https://exame.abril.com.br/economia/descubra-como-deputados-e-senadores-votaram-nos-ultimos-quatro-anos-m0064180/',
    'https://noticias.uol.com.br/politica/ultimas-noticias/2010/12/15/veja-lista-dos-politicos-que-apoiaram-a-votacao-do-aumento-de-salario.htm',
    'http://www.votenaweb.com.br/politicos/jair.bolsonaro/projetos_votados?vote=-1',
    'https://politica.estadao.com.br/noticias/geral,bolsonaro-aprova-dois-projetos-em-26-anos-de-congresso,70001900653',
    'https://br.sputniknews.com/brasil/201707238935795-propostas-aprovadas-bolsonaro-congresso/',
    'https://www1.folha.uol.com.br/mercado/2018/09/como-deputado-bolsonaro-defende-privilegios-e-eleva-gasto-publico.shtml',
    'https://politica.estadao.com.br/noticias/eleicoes,the-economist-chama-bolsonaro-de-a-ultima-ameaca-da-america-latina,70002510950',
    'https://www1.folha.uol.com.br/poder/2018/03/pre-candidato-bolsonaro-quadruplica-faltas-na-camara-dos-deputados.shtml',
    'https://congressoemfoco.uol.com.br/especial/noticias/com-agenda-intensa-pre-candidato-bolsonaro-quadruplica-faltas-na-camara/',
    'https://jovempan.uol.com.br/programas/ao-explicar-r-200-mil-da-jbs-bolsonaro-admite-que-pp-recebeu-propina-qual-partido-nao-recebe.html',
    'https://www1.folha.uol.com.br/paywall/login.shtml?https://www1.folha.uol.com.br/poder/2017/05/1886798-qual-partido-nao-recebe-diz-bolsonaro-sobre-propina-a-radio.shtml',
    'https://www.sociedademilitar.com.br/wp/2017/05/bolsonaro-teria-maquiado-dinheiro-recebido-da-jbs-friboi.html',
    'https://www.metropoles.com/brasil/politica-br/site-do-tse-mostra-que-bolsonaro-recebeu-doacao-da-jbs',
    'https://www.vice.com/pt_br/article/d7ekjy/prestacao-de-contas-no-site-do-tse-mostra-que-bolsonaro-recebeu-doacao-da-jbs',
    'http://inter01.tse.jus.br/spceweb.consulta.receitasdespesas2014/resumoReceitasByCandidato.action?sqCandidato=190000001444&sgUe=&sgUfMunicipio=RJ&filtro=S&tipoEntrega=0',
    'https://politica.estadao.com.br/noticias/geral,camara-gasta-mais-com-voo-eleitoral-de-bolsonaro,70002149854',
    'https://oglobo.globo.com/brasil/pre-candidato-bolsonaro-percorre-pais-bancado-pela-camara-21719277',
    'https://www.diariodocentrodomundo.com.br/bolsonaro-heroi-dos-protestos-estava-no-partido-mais-citado-na-lava-jato-e-esta-na-lista-de-furnas-por-kiko-nogueira/',
    'https://epoca.globo.com/diplomata-foi-morto-pela-ditadura-antes-de-denunciar-corrupcao-no-regime-confirma-nova-certidao-23089585',
    'https://noticias.uol.com.br/politica/ultimas-noticias/2010/12/15/veja-lista-dos-politicos-que-apoiaram-a-votacao-do-aumento-de-salario.htm',
    'https://www1.folha.uol.com.br/poder/2018/01/1948729-com-imovel-proprio-bolsonaro-ganha-auxilio-moradia-da-camara.shtml',
    'https://congressoemfoco.uol.com.br/especial/noticias/bolsonaro-recebe-auxilio-moradia-mesmo-tendo-apartamento-em-brasilia/',
    'https://noticias.band.uol.com.br/noticias/100000895436/bolsonaro-diz-que-usou-auxilio-moradia-para-comer-gente-.html',
    'https://www.em.com.br/app/noticia/politica/2018/01/12/interna_politica,930477/bolsonaro-diz-que-usou-auxilio-moradia-para-comer-gente.shtml',
    'https://br.noticias.yahoo.com/bolsonaro-diz-que-usou-auxilio-moradia-para-comer-gente-131136800.html',
    'https://www.oantagonista.com/brasil/bolsonaro-esse-dinheiro-de-auxilio-moradia-eu-usava-pra-comer-gente-ta-satisfeita-agora-ou-nao/',
    'https://politica.estadao.com.br/blogs/blog-do-fucs/as-afinidades-de-bolsonaro-e-das-esquerdas-na-economia/',
    'https://www.facebook.com/plugins/video.php?href=https%3A%2F%2Fwww.facebook.com%2Fbolsonaronunca%2Fvideos%2F1960681053988153%2F&show_text=0&width=560',
    'https://www1.folha.uol.com.br/fsp/cotidian/ff2611201025.htm',
    'https://www1.folha.uol.com.br/fsp/cotidian/ff1905200210.htm',
    'https://www.em.com.br/app/noticia/politica/2018/04/14/interna_politica,951685/10-frases-polemicas-de-bolsonaro-que-o-deputado-considerou-brincadeira.shtml',
    'http://www.tribunadainternet.com.br/bolsonaro-diz-que-o-maior-problema-da-amazonia-e-a-protecao-da-floresta/',
    'http://www.observatoriodoclima.eco.br/wp-content/uploads/2018/09/Clima_Eleicoes_2018_Candidatos.jpeg',
    'https://www.ncbi.nlm.nih.gov/m/pubmed/23467753/?i=2&from=/29507953/related',
    'https://www.ncbi.nlm.nih.gov/m/pubmed/29507953/related/',
    'https://novaescola.org.br/conteudo/84/conheca-o-kit-gay-vetado-pelo-governo-federal-em-2011',
    'http://www.e-farsas.com/o-livro-aparelho-sexual-e-cia-faz-parte-do-kit-gay-distribuido-pelo-mec.html',
    'http://www2.camara.leg.br/camaranoticias/radio/materias/ULTIMAS-NOTICIAS/410781-SEMINARIO-LGBT-VAI-DISCUTIR-INFANCIA-E-SEXUALIDADE.html',
    'https://super.abril.com.br/comportamento/esse-e-o-livro-pornografico-que-o-bolsonaro-levou-ao-jornal-nacional/',
    'https://exame.abril.com.br/brasil/bolsonaro-ressuscita-polemica-do-kit-gay-com-livro-juvenil-no-jn/',
    'https://istoe.com.br/bolsonaro-o-candidato-fake/',
    'https://noticias.uol.com.br/politica/eleicoes/2018/noticias/2018/08/01/ao-distorcer-historia-bolsonaro-usa-estrategia-de-quem-faz-fake-news.htm',
    'https://brasil.elpais.com/brasil/2018/09/17/politica/1537142202_233134.html',
    'https://www.revistaforum.com.br/fake-news-alimenta-campanha-de-bolsonaro-nas-redes/',
    'https://tvefamosos.uol.com.br/noticias/redacao/2018/09/18/fernanda-montenegro-responde-a-fake-news-politico-nao-me-posicionei.htm',
    'https://catracalivre.com.br/cidadania/fake-news-ivete-sangalo-nao-apoia-jair-bolsonaro/',
    'https://noticias.uol.com.br/comprova/ultimas-noticias/2018/09/14/padre-marcelo-rossi-desmente-apoio-a-bolsonaro-e-nega-ter-gravado-audio.htm',
    'http://www.e-farsas.com/o-padre-marcelo-rossi-gravou-audio-pedindo-voto-para-o-bolsonaro.html',
    'https://gauchazh.clicrbs.com.br/politica/eleicoes/noticia/2018/09/video-de-2015-foi-editado-para-parecer-manifestacao-de-apoio-a-bolsonaro-cjm87j1v404dd01pxzgcwv6xg.html',
    'https://gauchazh.clicrbs.com.br/politica/eleicoes/noticia/2018/09/videos-foram-editados-como-se-fossem-atos-em-apoio-a-bolsonaro-cjmatt86204vl01pxddptdpsm.html',
    'https://www.youtube.com/watch?v=QJNy08VoLZs',
    'https://www.youtube.com/watch?v=l3m4nhtxLl4',
    'https://www.youtube.com/watch?v=Z1oGuNkGV2g',
    'https://www.youtube.com/watch?v=QJNy08VoLZs',
    'https://www.youtube.com/watch?v=_tpo5NWuwQo',
    'https://www.youtube.com/watch?v=Yw74RtoZE_I',
    'https://www.youtube.com/watch?v=okcDprybAUU',
    'https://www.youtube.com/watch?v=8Y93yYKDZAM',
    'https://www.youtube.com/watch?v=Hxh_laUnt3I',
    'https://www.youtube.com/watch?v=yabLVrYCvdo',
    'https://www.youtube.com/watch?v=qIDyw9QKIvw',
    'https://www.youtube.com/watch?v=-fMdCwlwg8E',
    'https://www.youtube.com/watch?v=gXTORaaeO6g',
    'https://www.ted.com/talks/yuval_noah_harari_why_fascism_is_so_tempting_and_how_your_data_could_power_it',
    'http://fiponline.edu.br/coopex/pdf/cliente=3-9672cc519fddccd444d661c603c794ef.pdf',
    'https://www.facebook.com/roberto.abdala1/videos/10217787648549236/',
    'https://super.abril.com.br/historia/7-motivos-que-fizeram-os-alemaes-embarcar-na-loucura-de-hitler/',
    'https://brasil.elpais.com/brasil/2017/06/21/cultura/1498069163_921732.html',
    'https://www.bbc.com/portuguese/celular/noticias/2012/11/121112_hitler_carisma_mv.shtml',
    'https://www.dw.com/pt-br/jornalista-compara-ascens%C3%A3o-de-bolsonaro-%C3%A0-de-hitler/a-42139522',
    'http://www.observatoriodoclima.eco.br/o-clima-nas-eleicoes/',
    'https://www.bbc.com/portuguese/brasil-45215784',
    'http://www.jornaldaciencia.org.br/propostas-presidencia-cti/',
    'https://www.revistaforum.com.br/os-elementos-nazistas-no-discurso-politico-de-bolsonaro/',
    'https://revistacult.uol.com.br/home/a-personalidade-autoritaria-adorno/',
    'https://oglobo.globo.com/fato-ou-fake/e-fato-que-deputados-eleitos-pelo-psl-quebraram-placa-com-nome-de-marielle-franco-em-comicio-de-wilson-witzel-23140096',
    'https://brasil.elpais.com/brasil/2018/10/02/politica/1538508720_526769.html',
    'http://www.pf.gov.br/imprensa/lava-jato/numeros-da-operacao-lava-jato?fbclid=IwAR31vcNh952_JB9kMzRyn2V5uue9BRj1R-ZdLKvXodoa6ge-j3qbN4hjKLQ',
    'https://www.canalmeio.com.br/2018/10/12/how-fascism-works-jason-stanley-on-trump-bolsonaro-and-the-rise-of-fascism-across-the-globe-youtube/?utm_source=meio&utm_medium=email&fbclid=IwAR2XpOPClbVgEaEwhOYZIrfIMqV_-ZK7QoKvP9JBQ3XcUWCdeeYNO3jEni0',
    'https://www.bbc.com/portuguese/brasil-45874344?fbclid=IwAR1KbuHLdIqhmNn7JMKI6RzyUD04iCNBqt4CXA5rDFgM12M0G8hYe3tKMEU',
    'https://oglobo.globo.com/mundo/pobreza-extrema-nos-eua-tende-crescer-sob-trump-diz-relatorio-da-onu-22741472?utm_source=Facebook&utm_medium=Social&utm_campaign=compartilhar',
    'https://docs.google.com/presentation/d/1TygJL_3KIXArcLjtkyxBH4mD1GczCMHTiER3G27N5lw/edit#slide=id.p1',
    `Brasileiro ama dar pitaco sobre a situação política dos outros países (vide EUA, Cuba, Venezuela).\n
    Agora um pouco do que os outros países pensam sobre a nossa situação atual.\n
    \n
    Lista de artigos publicados em periódicos internacionais sobre as eleições no Brasil. Obrigada ao ilustre anônimo pelo trabalho.\n
    \n
    ALEMANHA\n
    ZEIT\n
    Um Fascista Se Apresentando Como Homem Honesto\n
    https://bit.ly/2y7Gskf\n
    \n
    Der Spiegel\n
    Jair Bolsonaro - ascensão de um populista de direita\n
    https://bit.ly/2OzW22k\n
    \n
    Frankfurter Allgemeine\n
    Alerta vermelho para democracia\n
    https://bit.ly/2Qr2YMC\n
    \n
    Sueddeutsche\n
    O demagogo do deserto é de repente uma nova estrela política no Brasil.\n
    https://bit.ly/2DOTU2E\n
    \n
    Deutsche Welle\n
    Analistas alemães veem democracia no Brasil em risco\n
    https://bit.ly/2IuN7Km\n
    \n
    Handelsblatt\n
    O fascista popular. Até agora, os políticos brasileiros são considerados corruptos e ineficientes, mas ideologicamente flexíveis e educados. Isso mudou com Jair Bolsonaro - o populista poderia até se tornar presidente. Uma história mundial.\n
    https://bit.ly/2Iy10aB\n
    \n
    ARGENTINA\n
    \n
    La Nacion\n
    Linha dura e Messianismo: Bolsonaro, o candidato mais temido, se lança para a presidência. \n
    https://bit.ly/2ya60NR\n
    \n
    El Clarín\n
    Jair Bolsonaro: militarista, xenófobo e favorito para a eleição brasileira\n
    https://clar.in/2y7zImH\n
    \n
    ÁFRICA DO SUL\n
    \n
    The Star\n
    Mulheres brasileiras marcham contra \'formas misóginas\n
    https://bit.ly/2NiZnOO\n
    \n
    ÁUSTRIA\n
    \n
    Die Presse\n
    Ex-Presidente Detido e o Trump Tropical\n
    https://bit.ly/2NiHgIG\n
    \n
    AUSTRALIA\n
    \n
    News.Au\n
    Seria este é o político mais repulsivo do mundo?\n
    Pensando que Donald Trump é ruim? Conheça o possível presidente brasileiro cujas crenças repulsivas chocaram o mundo.\n
    https://bit.ly/2IwRrIO\n
    \n
    The Australian\n
    Conheça o Candidato que é um risco a democracia\n
    https://bit.ly/2xVQdCN\n
    \n
    The Sydney Sunday Herald\n
    Por que alguns no Brasil estão se virando para um explosivo candidato de extrema-direita para o presidente?\n
    https://bit.ly/2E09LvA\n
    \n
    CHILE\n
    \n
    EL MERCURIO\n
    "Bolsonaro assusta com soluções simplistas e autoritárias"\n
    https://bit.ly/2OuWDSV\n
    \n
    LA TERCERA\n
    "Bolsonaro conseguiu captar o sentimento de revolta no Brasil"\n
    https://bit.ly/2xU0sYj\n
    \n
    LA CUARTA\n
    Jair Bolsonaro: O Trump do Brasil.\n
    \n
    ESPANHA\n
    \n
    El País\n
    Bolsonaro é um Pinochet institutional para o Brasil \n
    https://bit.ly/2DAJgfG\n
    \n
    El Mundo\n
    Lider Polemico. Bolsonaro: o candidato racista, homofóbico e machista do brasil.\n
    https://bit.ly/2xYOzj4\n
    \n
    La Vanguardia\n
    Bolsonaro: o Candidato Ultradireitista que canalizou a insatisfacao no Brasil\n
    https://bit.ly/2Iy2UIh\n
    \n
    El Confidencial \n
    Jair Bolsonaro: o “Le Pen tropical” que pode ser o próximo presidente do Brasil.\n
    https://bit.ly/2P9ETtH\n
    \n
    ESTADOS UNIDOS\n
    \n
    Revista Time \n
    Jair Bolsonaro ama Trump, odeia pessoas gays e admira autocratas. Ele poderia ser o próximo presidente do Brasil\n
    https://ti.me/2wjfg16\n
    \n
    Fox News\n
    Um olhar sobre os comentários ofensivos do candidato brasileiro Bolsonaro\n
    https://fxn.ws/2O0QMFI\n
    \n
    HuffingtonPost\n
    Jair Bolsonaro e o violento caos das eleições presidenciais no Brasil\n
    https://bit.ly/2zNnod4\n
    \n
    Washington Post\n
    Um político parecido com Trump no Brasil poderia ter o apoio de um poderoso grupo religioso: os evangélicos\n
    https://wapo.st/2Rk6tFZ\n
    \n
    The New York Times\n
    Brasil flerta com um retorno aos dias sombrios\n
    https://nyti.ms/2xsXSYv\n
    \n
    Americas Quarterly\n
    Ditadura militar iminente no Brasil?: Ganhando ou perdendo, a ascensão de Jair Bolsonaro colocar em perigo a jovem democracia brasileira. \n
    https://bit.ly/2OWpYCW\n
    \n
    Financial Times\n
    O "trágico destino" brasileiro de uma rebelião antidemocrática surge novamente:\n
    A raiva pública contra uma elite corrupta poderia precipitar outra revolta\n
    https://on.ft.com/2DRGxyO\n
    \n
    FRANÇA\n
    \n
    Le Figaro\n
    Brasil nas garras da tentação autoritária\n
    https://bit.ly/2vqsb0S\n
    \n
    Le Monde por Rádio França Internacional RFI\n
    Trump tropical, homofóbico e machista\n
    https://bit.ly/2zMhaKL\n
    \n
    Liberation\n
    No Brasil, um ex-soldado para liquidar a democracia\n
    https://bit.ly/2P9qIEZ\n
    \n
    HOLANDA\n
    \n
    Der Volkskrant\n
    Centenas de milhares de mulheres no Brasil nas ruas contra a extrema direita: "Ele nunca!"\n
    https://bit.ly/2DQvPsj\n
    \n
    ÍNDIA\n
    \n
    India Express \n
    Deixe a polícia matar criminosos, diz o candidato presidencial do Brasil, Jair Bolsonaro\n
    https://bit.ly/2NiJdFd\n
    \n
    ITÁLIA\n
    \n
    La Republica\n
    Bolsonaro, líder xenófobo e anti-gay que dá o assalto à Presidência do Brasil\n
    https://bit.ly/2Qrb73H\n
    \n
    Corriende della Sierra\n
    Um pesadelo chamado Bolsonaro\n
    https://bit.ly/2zNdkRF\n
    \n
    MÉXICO\n
    La Jornada\n
    Bolsonaro: O candidato Imprevisível\n
    https://bit.ly/2OD93sh\n
    \n
    Milenio\n
    Bolsonaro, o Neofascista que seduz o Brasil\n
    https://bit.ly/2zNQjhl\n
    \n
    El Universal\n
    Militar de ultra-direita: um voto pelo passado?\n
    https://bit.ly/2P6jjWO\n
    \n
    MOÇAMBIQUE\n
    O País\n
    Bolsonaro que lidera sondagens de intenção de voto no país com a preferência de 27% dos eleitores terá irritado muitos brasileiros com comentários percebidos como sexistas, racistas e homofóbicos.\n
    https://bit.ly/2DQlP29\n
    \n
    PERU\n
    \n
    La Republica\n
    Brasil resiste:a promessa autoritária de Bolsonaro é desafiada pelas mulheres.\n
    https://bit.ly/2zFQ0Vy\n
    \n
    ÁFRICA DO SUL\n
    \n
    The Star\n
    Mulheres brasileiras marcham contra \'formas misóginas\n
    https://bit.ly/2NiZnOO\n
    \n
    PORTUGAL\n
    \n
    O Público \n
    Bolsonaro, o jagunço à porta do Planal\n
    https://bit.ly/2xXbM5Y\n
    \n
    Diário de Notícias\n
    Jair Bolsonaro é perigo real no Brasil e segue passos de Adolf Hitler\n
    https://bit.ly/2yaPMUz\n
    \n
    POLONIA\n
    \n
    Gazeta Prawna\n
    Trump brasileiro e outros. Escândalos de corrupção abrem caminho para o poder dos populistas\n
    https://bit.ly/2xWanga\n
    \n
    QATAR (MUNDO ÁRABE)\n
    \n
    Al Jazeera\n
    Milhares de Mulheres protestam contra Bolsonaro\n
    https://bit.ly/2RhJjQF\n
    \n
    REINO UNIDO\n
    \n
    The Economist (CAPA)\n
    A mais nova Ameaça na América Latina\n
    https://econ.st/2OuXKlO\n
    \n
    The Times\n
    Jair Bolsonaro, populista "perigoso" promete tornar o Brasil seguro\n
    https://bit.ly/2uxPG8p\n
    \n
    The Guardian\n
    Trump dos trópicos: o candidato \'perigoso\' que lidera a corrida presidencial do Brasil\n
    https://bit.ly/2qKHkYA\n
    \n
    The Telegraph\n
    Dezenas de milhares dizem “ele não” ao principal candidato do Brasil\n
    https://bit.ly/2qKHkYA\n
    \n
    The Economist\n
    Brasília, nós temos um problema\n
    O perigo representado por Jair Bolsonaro\n
    https://econ.st/2vxMFWu\n
    \n
    SUÍCA\n
    Neuen Zürcher Zeitung\n
    O Faxineiro Racista do Brasil \n
    https://bit.ly/2QoJTdW\n
    `,
  ];

  // Dispath an event (of click, por instance)
  const eventFire = (el, etype) => {
    var evt = document.createEvent("MouseEvents");
    evt.initMouseEvent(etype, true, true, window, 0, 0, 0, 0, 0, false, false, false, false, 0, null);
    el.dispatchEvent(evt);
  }

  // Send a message
  const sendMessage = (message) => {
    const messageBox = document.querySelectorAll("[contenteditable='true']")[0];

    //add text into input field
    messageBox.innerHTML = message;

    //Force refresh
    event = document.createEvent("UIEvents");
    event.initUIEvent("input", true, true, window, 1);
    messageBox.dispatchEvent(event);
    
    // Time to create thumbnail
    setTimeout(function() {      
      //Click at Send Button
      eventFire(document.querySelector('span[data-icon="send"]'), 'click');
    }, 10000);
  }

  const start = () => {
    var counter = 0;

    var teste = setInterval(function () {
      if (counter < messages.length) {
        sendMessage(messages[counter]);
        counter++;
      } else {
        clearInterval(teste);
      }
    }, 60000);
  }

  start();
})();