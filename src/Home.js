import './assets/css/styles.css';
import header from './assets/img/header.png';
import myVideo from './assets/img/video.gif';
import transactions from './assets/img/transactions.png';
import moto from './assets/img/motorbiking.png';
import voiture from './assets/img/sports-car.png';
import fusee from './assets/img/start-up.png';
import compta from './assets/img/compta.png';
import connexion from './assets/img/connexion.png';
import confirmer from './assets/img/identity.png';
import valider from './assets/img/valider.png';
import logo from './assets/img/logo.png';
import { ReactComponent as Check } from './assets/img/check.svg';
import { ReactComponent as Apple } from './assets/img/apple-store.svg';
import { ReactComponent as Google } from './assets/img/google-store.svg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function Home() {
	const style = {
		'--fa-primary-color': '#582d37',
		'--fa-secondary-color': '#5b5757',
	};
	return (
		<div>
			<head>
				<meta charset="UTF-8" />
				<meta name="viewport" content="width=device-width, initial-scale=1.0" />

				<link
					href="https://unpkg.com/boxicons@2.0.7/css/boxicons.min.css"
					rel="stylesheet"
				/>
				<link
					href="//maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css"
					rel="stylesheet"
				/>

				<title>Ma néobanque</title>
			</head>
			<body>
				<a href="#" class="scrolltop" id="scroll-top">
					<i class="bx bx-up-arrow-alt scrolltop__icon"></i>
				</a>

				<header class="l-header" id="header">
					<nav class="nav bd-container">
						<a href="#" class="nav__logo">
							<img alt="logo" src={logo} style={{ width: '170px' }} />
						</a>
						<div class="nav__menu" iidid="nav-menu">
							<ul class="nav__list">
								<li class="nav__item">
									<a href="#home" class="nav__link active-link">
										Accueil
									</a>
								</li>
								<li class="nav__item">
									<a href="#share" class="nav__link">
										Fonctionnalités
									</a>
								</li>
								<li class="nav__item">
									<a href="" class="nav__link">
										Se connecter
									</a>
								</li>
								<li class="nav__item" id="ouvrir-compte">
									<a
										href="inscription.html"
										class="nav__link"
										style={{ color: 'white' }}
									>
										Ouvrir un compte
									</a>
								</li>
							</ul>
						</div>

						<div class="nav__toggle" id="nav-toggle">
							<i class="bx bx-grid-alt"></i>
						</div>
					</nav>
				</header>
				<main class="l-main">
					<section class="home" id="home">
						<div class="home__container bd-container bd-grid">
							<div class="home__img">
								<img alt="ok" src={header} />
							</div>

							<div class="home__data">
								<h1 class="home__title">
									Le compte pro optimisé pour votre business.
								</h1>
								<p class="home__description">
									<span id="img" class="valign">
										<Check />
									</span>
									Automatisez la gestion de vos finances
									<br />
									<span id="img" class="valign">
										<Check />
									</span>
									Mettez fin aux notes de frais
									<br />
									<span id="img" class="valign">
										<Check />
									</span>
									Simplifiez vraiment votre comptabilité
								</p>
								<a href="#" class="button">
									Inscrivez vous dès maintenant
								</a>
							</div>
						</div>
					</section>

					<section class="share section bd-container" id="share">
						<div class="share__container bd-grid">
							<div class="share__data">
								<h2 class="section-title-center">
									Envoyez et recevez des paiements
									<br />
									sans frais cachés.
								</h2>
								<p class="share__description">
									<i class="fa fa-check" aria-hidden="true"></i> Compte pro avec
									IBAN EE
								</p>
								<p class="share__description">
									<i class="fa fa-check" aria-hidden="true"></i> Virements SEPA
									entrants et sortants illimités
								</p>
								<p class="share__description">
									<i class="fa fa-check" aria-hidden="true"></i> Virements
									instantanés jusqu'a 100 000€
								</p>
							</div>
							<div class="share__img">
								<img alt="ok" src={myVideo} />
							</div>
						</div>

						<div class="share__container bd-grid">
							<div class="share__data" id="deux">
								<h2 class="section-title-center">
									Gérez vos cartes <br />
									facilement.
								</h2>
								<p class="share__description">
									<i class="fa fa-check" aria-hidden="true"></i> Émettez des
									cartes physiques et virtuelles
								</p>
								<p class="share__description">
									<i class="fa fa-check" aria-hidden="true"></i> Suivez les
									dépenses en temps réel pour toute votre équipe
								</p>
								<p class="share__description">
									<i class="fa fa-check" aria-hidden="true"></i> Bloquez et
									débloquez votre carte en un seul clic
								</p>
							</div>
							<div class="share__img">
								<img src={transactions} alt="" />
							</div>
						</div>

						<div class="share__container bd-grid">
							<div class="share__data">
								<h2 class="section-title-center">
									Votre comptabilité
									<br />
									simplifiée.
								</h2>
								<p class="share__description">
									<i class="fa fa-check" aria-hidden="true"></i> Consacrez moins
									de temps aux tâches administratives
								</p>
								<p class="share__description">
									<i class="fa fa-check" aria-hidden="true"></i> Téléchargez
									votre RIB et vos reçus en un clic
								</p>
							</div>
							<div class="share__img">
								<img src={compta} alt="" />
							</div>
						</div>
					</section>

					<h2 class="section-title">Flexible et transparent</h2>

					<div class="background">
						<div class="container">
							<div class=" pricing-table">
								<div class="pricing-plan">
									<img src={moto} alt="" class="pricing-img" />
									<h2 class="pricing-header">BASIC</h2>
									<span class="pricing-price">
										9€<span style={{ fontSize: 15 }}>/mois</span>
									</span>
									<a href="#/" class="pricing-button">
										Ouvrir un compte
									</a>
									<ul class="pricing-features">
										<li class="pricing-features-item">
											<span style={{ fontSize: 12 }}>
												<strong>
													Les services essentiels pour gérer votre activité
													d'indépendant.
												</strong>
											</span>
										</li>
										<li class="pricing-features-item">
											Service de banque en ligne
										</li>
										<li class="pricing-features-item">
											<strong>30</strong> jours gratuits et sans engagement.
										</li>
										<li class="pricing-features-item">
											<strong>60k€/an</strong> de commissions de mouvements de
											compte incluses à hauteur puis 0,15%
										</li>
										<li class="pricing-features-item">
											<strong>1</strong> seul utilisateur (1 carte Mastercard
											Business)
										</li>
										<li class="pricing-features-item">
											Cartes virtuelles à <strong>2€/mois</strong>, par carte.
										</li>
										<li class="pricing-features-item">
											<strong>200€</strong> de retraits gratuits par mois, puis
											1% du montant.
										</li>
										<li class="pricing-features-item">
											<strong>1500€</strong> de plafond pour vos retraits.
										</li>
										<li class="pricing-features-item">
											<strong>2%</strong> pour les paiements hors zone euro.
										</li>
										<li class="pricing-features-item">
											<strong>30</strong> virements et prélèvements puis 0,50€
											au delà.
										</li>
										<li class="pricing-features-item">
											Support <strong>7 jours sur 7</strong>
										</li>
									</ul>
								</div>

								<div class="pricing-plan" id="popular">
									<div class="pined">
										<div class="popular-label">Populaire</div>
									</div>
									<img src={fusee} alt="" class="pricing-img" id="fusee" />
									<h2 class="pricing-header">PREMIUM</h2>
									<span class="pricing-price">
										39€<span style={{ fontSize: 15 }}>/mois</span>
									</span>
									<a href="#/" class="pricing-button is-featured">
										Ouvrir un compte
									</a>
									<ul class="pricing-features">
										<li class="pricing-features-item">
											<span style={{ fontSize: 12 }}>
												<strong>
													Le forfait qui inclut toutes nos Fonctionnalités et un
													support prioritaire.
												</strong>
											</span>
										</li>
										<li class="pricing-features-item">
											Service de banque en ligne
										</li>
										<li class="pricing-features-item">
											<strong>30</strong> jours gratuits et sans engagement.
										</li>
										<li class="pricing-features-item">
											<strong>1000k€/an</strong> de commissions de mouvements de
											compte incluses à hauteur puis 0,15%.
										</li>
										<li class="pricing-features-item">
											<strong>1</strong> seul utilisateur (1 carte Mastercard
											Business) et accès comptable.
										</li>
										<li class="pricing-features-item">
											Cartes virtuelles à <strong>2€/mois</strong>, par carte.
										</li>
										<li class="pricing-features-item">
											<strong>200€</strong> de retraits gratuits par mois, puis
											1% du montant.
										</li>
										<li class="pricing-features-item">
											<strong>2500€</strong> de plafond pour vos retraits.
										</li>
										<li class="pricing-features-item">
											<strong>1,7%</strong> pour les paiements hors zone euro.
										</li>
										<li class="pricing-features-item">
											<strong>100</strong> virements et prélèvements puis 0,20€
											au delà.
										</li>
										<li class="pricing-features-item">
											Fonctionnalités avancées (multi-comptes, virements
											groupés)
										</li>
										<li class="pricing-features-item">
											Pack comptabilité (reçus digitalisés, auto-détection de la
											TVA, labels)
										</li>
										<li class="pricing-features-item">
											Support <strong> prioritaire 7 jours sur 7</strong>
										</li>
									</ul>
								</div>

								<div class="pricing-plan">
									<img src={voiture} alt="" class="pricing-img" />
									<h2 class="pricing-header">STANDARD</h2>
									<span class="pricing-price">
										19€<span style={{ fontSize: 15 }}>/mois</span>
									</span>
									<a href="#/" class="pricing-button">
										Ouvrir un compte
									</a>
									<ul class="pricing-features">
										<li class="pricing-features-item">
											<span style={{ fontSize: 12 }}>
												<strong>
													Le compte complet pour faciliter votre gestion
													bancaire et comptable.
												</strong>
											</span>
										</li>
										<li class="pricing-features-item">
											Service de banque en ligne
										</li>
										<li class="pricing-features-item">
											<strong>30</strong> jours gratuits et sans engagement.
										</li>
										<li class="pricing-features-item">
											<strong>150k€/an</strong> de commissions de mouvements de
											compte incluses à hauteur puis 0,15%.
										</li>
										<li class="pricing-features-item">
											<strong>1</strong> seul utilisateur (1 carte Mastercard
											Business) et accès comptable.
										</li>
										<li class="pricing-features-item">
											Cartes virtuelles à <strong>2€/mois</strong>, par carte.
										</li>
										<li class="pricing-features-item">
											<strong>200€</strong> de retraits gratuits par mois, puis
											1% du montant.
										</li>
										<li class="pricing-features-item">
											<strong>1.9%</strong> pour les paiements hors zone euro.
										</li>
										<li class="pricing-features-item">
											<strong>60</strong> virements et prélèvements puis 0,30€
											au delà.
										</li>
										<li class="pricing-features-item">
											Fonctionnalités avancées (multi-comptes, virements
											groupés)
										</li>
										<li class="pricing-features-item">
											Pack comptabilité (reçus digitalisés, auto-détection de la
											TVA, labels)
										</li>
										<li class="pricing-features-item">
											Support <strong>7 jours sur 7</strong>
										</li>
									</ul>
								</div>
							</div>
						</div>
					</div>

					<section class="decoration section bd-container" id="decoration">
						<h2 class="section-title">Comment ouvrir un compte ?</h2>
						<div class="decoration__container bd-grid">
							<div class="decoration__data">
								<img src={connexion} alt="" class="step-image" />
								<h4 class="step-text">
									Ouvrez votre compte en moins de 5 minutes sans paperasse
								</h4>
							</div>

							<div class="decoration__data">
								<img src={confirmer} alt="" class="step-image2" />
								<h4 class="step-text">
									Confirmez votre identité avec un selfie et une pièce
									d’identité
								</h4>
							</div>

							<div class="decoration__data">
								<img src={valider} alt="" class="step-image2" />
								<h4 class="step-text">
									Votre compte est validé <br />
									et votre IBAN prêt
								</h4>
							</div>
						</div>
					</section>
					<section class="send section">
						<h2 class="section-title">Ouvrir un compte dès maintenant</h2>
						<div class="texte">
							30 jours gratuits et sans engagement, à partir de 9€ par mois.
						</div>
						<div class="compte">
							<Apple alt="" class="dl" />
							<Google alt="" class="dl" />
							<br />
						</div>
						<div class="texte2">
							<p>⭐ ⭐ ⭐ ⭐ ⭐ 4.8/5</p>
						</div>
						<div class="texte3">
							<p>Note basée sur + de 18 200 avis</p>
						</div>
					</section>
				</main>

				<footer class="footer section">
					<div class="footer__container bd-container bd-grid">
						<div class="footer__content">
							<Apple alt="" />
							<br />
							<Google alt="" />
						</div>
						<div class="footer__content">
							<h3 class="footer__title">Support</h3>
							<ul>
								<li>
									<a href="#" class="footer__link">
										Presse{' '}
									</a>
								</li>
								<li>
									<a href="#" class="footer__link">
										Contact
									</a>
								</li>
								<li>
									<a href="#" class="footer__link">
										Blog
									</a>
								</li>
							</ul>
						</div>

						<div class="footer__content">
							<h3 class="footer__title">À propos</h3>
							<ul>
								<li>
									<a href="#" class="footer__link">
										Confidentialité
									</a>
								</li>
								<li>
									<a href="#" class="footer__link">
										Mentions Légales
									</a>
								</li>
								<li>
									<a href="#" class="footer__link">
										Conditions générales
									</a>
								</li>
							</ul>
						</div>

						<div class="footer__content">
							<h3 class="footer__title">Réseaux</h3>
							<a href="#" class="footer__social">
								<i class="bx bxl-facebook-circle"></i>
							</a>
							<a href="#" class="footer__social">
								<i class="bx bxl-twitter"></i>
							</a>
							<a href="#" class="footer__social">
								<i class="bx bxl-instagram-alt"></i>
							</a>
						</div>
					</div>

					<p class="footer__copy">&#169; 2021 BPartners. All right reserved</p>
				</footer>

				<script src="https://unpkg.com/scrollreveal"></script>

				<script src="assets/js/main.js"></script>
			</body>
		</div>
	);
}

export default Home;
