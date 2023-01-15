<h1>Product and Customer Management</h1>

[//]: # (<h3>Project Structure</h3>)

[//]: # (<img src="/screenshots/Product_Structure.png" alt="Project Structure">)


<!-- PROJECT LOGO -->
<br />
<div align="center">
  <a href="https://github.com/HamzaOuggadi/ProductManagement-synthese-microservice">
    <img src="/screenshots/img.png" alt="Logo">
  </a>

<h3 align="center">Product and Customer Management</h3>

  <p align="center">
    Web App for Product and Customer Management
    <br />
    <a href="https://github.com/HamzaOuggadi/ProductManagement-synthese-microservice"><strong>Explore the docs »</strong></a>
    <br />
    <br />
    <a href="https://github.com/HamzaOuggadi/ProductManagement-synthese-microservice">View Demo</a>
    ·
    <a href="https://github.com/HamzaOuggadi/ProductManagement-synthese-microservice/issues">Report Bug</a>
    ·
    <a href="https://github.com/HamzaOuggadi/ProductManagement-synthese-microservice/issues">Request Feature</a>
  </p>
</div>


> **Note**
> This Project is still under construction and continuous improvement, nothing is final.
<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li><a href="#about-the-project">About The Project</a></li>
    <li><a href="#built-with">Built With</a></li>
    <li><a href="#screenshots">Screenshots</a></li>
    <li><a href="#installation-and-usage">Installation and usage</a></li>
    <li><a href="#class-diagrams">Class Diagrams</a></li>
    <li><a href="#contributing">Contributing</a></li>
    <li><a href="#contact">Contact</a></li>
    <li><a href="#acknowledgments">Acknowledgments</a></li>
  </ol>
</details>



<!-- ABOUT THE PROJECT -->
## About The Project

<p>This Project was made as a synthesis for the Microservices Module during my studies.</p>
<p>Contrary to the Monolithic Architecture, Microservices allows us to build Scalable and well Maintainable Software.</p>
<p>Please find below the Technologies used for this Project.</p>
<p>Later the Microservices were secured using Keycloak v20.0.3</p>

<p align="right">(<a href="#readme-top">back to top</a>)</p>



### Built With

* [![Java][Java.com]][Java-url]
* [![Spring][Spring.io]][Spring-url]
* [![SpringSecurity][SpringSecurity.io]][Spring-url]
* [![Angular][Angular.io]][Angular-url]
* [![Bootstrap][Bootstrap.com]][Bootstrap-url]
* [![Docker][Docker.com]][Docker-url]
* [![Keycloak][keycloak.org]][Keycloak-url]


<p>This Project is composed of 5 Microservices + The Frontend : </p>

<ul>
    <li>Gateway-Service</li>
    <li>Discovery-Service</li>
    <li>Customer-Service</li>
    <li>Inventory-Service</li>
    <li>Billing-Service</li>
</ul>
<ul>
    <li>Frontend</li>
</ul>


## Screenshots

Screenshots from the Web Application :

<h4 align="center">Home Page</h4>
<img src="/screenshots/HomePage.png" alt="">

<h4 align="center">Products Page</h4>
<img src="/screenshots/ProductList.png" alt="">

<h4 align="center">Edit Product Page</h4>
<img src="/screenshots/EditProductPage.png" alt="">

<h4 align="center">Customers List Page</h4>
<img src="/screenshots/CustomerList.png" alt="">

<h4 align="center">Add Customer Page</h4>
<img src="/screenshots/AddCustomer.png" alt="">

<h4 align="center">Authentication Panel</h4>
<img src="/screenshots/AuthPanel.png" alt="">

<h4 align="center">Bill Page</h4>
<img src="/screenshots/Bill.png" alt="">

<p align="right">(<a href="#readme-top">back to top</a>)</p>


## Installation and Usage

<p>At startup the Backend will generate 4 customers, 40 Products and bills for each customer that have been
populated with the given products for demonstration purposes, so no need to access the Database to add or modify anything.</p>

<p>The Frontend was made with Angular. NodeJS and Angular installation is needed as well as Keycloak for Angular.</p>

```javascript
npm install keycloak-angular keycloak-js
```

<p>Keycloak on the other hand, was deployed on a docker container and port bound to the Host Machine at port 8080.
Then I've configured it with a New Realm named <b><em>pm-realm</em></b> and a new client <b><em>pm-client</em></b></p>

```dockerfile
docker run -p 8080:8080 \
 -e KEYCLOAK_ADMIN=admin \
  -e KEYCLOAK_ADMIN_PASSWORD=admin \
   quay.io/keycloak/keycloak:20.0.3 start-dev
```

<p>The <mark><b>KEYCLOAK_ADMIN</b></mark> and <mark><b>KEYCLOAK_ADMIN_PASSWORD</b></mark> are Keycloak native parameters for the admin console, they can be changed later.</p>

<p>As per the users, 3 were made, one Admin and two Users. Admin has access to all the Data on the application, as for users, only limited access is given.
This difference of authorization can be seen on the backend, in the <em><b>CustomerController</b></em> Class as an example, as per picture below : </p>

<img src="/screenshots/CustomerController.png">

Code Snippet example of the authorization :

```java

    @PostMapping("/customers/addCustomer")
    @PreAuthorize("hasAuthority('Admin')")
    public Customer addCustomer(@RequestBody Customer customer) throws CustomerException {
        return customerService.addCustomer(customer);
    }
```

<p>Only Admins have the possibility to add a customer, as can be seen with annotation <em><b>@PreAuthorize("hasAuthority('Admin')")</b></em>.</p>

<p>On the other hand, a simple user can only check the customers list :</p>

```java
    @GetMapping("/customers")
    @PreAuthorize("hasAuthority('User')")
    public List<Customer> getCustomerList() {
        return customerService.listCustomers();
    }
```


## Class Diagrams

<h4 align="center">Customer Microservice</h4>

<img src="/screenshots/CustomerService.png" alt="">

<h4 align="center">Inventory Service</h4>

<img src="/screenshots/InventoryService.png" alt="">

<h4 align="center">Billing Service</h4>

<img src="/screenshots/bil.png" alt="">

<h4 align="center">Gateway Service</h4>

<img src="/screenshots/GatewayService.png" alt="">

<h4 align="center">Discovery Service</h4>

<img src="/screenshots/DiscoveryService.png" alt="">



<p align="right">(<a href="#readme-top">back to top</a>)</p>


## Contributing

If you have a suggestion that would make this better, please fork the repo and create a pull request. You can also simply open an issue with the tag "enhancement".
Don't forget to give the project a star! Thanks again!

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

<p align="right">(<a href="#readme-top">back to top</a>)</p>


<!-- CONTACT -->
## Contact

Hamza Ouggadi - hamza.ouggadi@gmail.com

Project Link: [https://github.com/HamzaOuggadi/ProductManagement-synthese-microservice](https://github.com/HamzaOuggadi/ProductManagement-synthese-microservice)

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- ACKNOWLEDGMENTS -->
## Acknowledgments

* [Pr. Mohamed Youssfi - Université Hassan II - ENSET Mohammedia](https://www.youtube.com/@mohamedYoussfi)


<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->
[contributors-shield]: https://img.shields.io/github/contributors/HamzaOuggadi/ProductManagement-synthese-microservice.svg?style=for-the-badge
[contributors-url]: https://github.com/HamzaOuggadi/ProductManagement-synthese-microservice/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/HamzaOuggadi/ProductManagement-synthese-microservice.svg?style=for-the-badge
[forks-url]: https://github.com/HamzaOuggadi/ProductManagement-synthese-microservice/network/members
[stars-shield]: https://img.shields.io/github/stars/HamzaOuggadi/ProductManagement-synthese-microservice.svg?style=for-the-badge
[stars-url]: https://github.com/HamzaOuggadi/ProductManagement-synthese-microservice/stargazers
[issues-shield]: https://img.shields.io/github/issues/HamzaOuggadi/ProductManagement-synthese-microservice.svg?style=for-the-badge
[issues-url]: https://github.com/HamzaOuggadi/ProductManagement-synthese-microservice/issues
[license-shield]: https://img.shields.io/github/license/HamzaOuggadi/ProductManagement-synthese-microservice.svg?style=for-the-badge
[license-url]: https://github.com/HamzaOuggadi/ProductManagement-synthese-microservice/blob/master/LICENSE.txt
[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=for-the-badge&logo=linkedin&colorB=555
[linkedin-url]: https://linkedin.com/in/linkedin_username
[product-screenshot]: images/screenshot.png
[Next.js]: https://img.shields.io/badge/next.js-000000?style=for-the-badge&logo=nextdotjs&logoColor=white
[Next-url]: https://nextjs.org/
[React.js]: https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB
[React-url]: https://reactjs.org/
[Vue.js]: https://img.shields.io/badge/Vue.js-35495E?style=for-the-badge&logo=vuedotjs&logoColor=4FC08D
[Vue-url]: https://vuejs.org/
[Angular.io]: https://img.shields.io/badge/Angular-DD0031?style=for-the-badge&logo=angular&logoColor=white
[Angular-url]: https://angular.io/
[Svelte.dev]: https://img.shields.io/badge/Svelte-4A4A55?style=for-the-badge&logo=svelte&logoColor=FF3E00
[Svelte-url]: https://svelte.dev/
[Laravel.com]: https://img.shields.io/badge/Laravel-FF2D20?style=for-the-badge&logo=laravel&logoColor=white
[Laravel-url]: https://laravel.com
[Bootstrap.com]: https://img.shields.io/badge/Bootstrap-563D7C?style=for-the-badge&logo=bootstrap&logoColor=white
[Bootstrap-url]: https://getbootstrap.com
[JQuery.com]: https://img.shields.io/badge/jQuery-0769AD?style=for-the-badge&logo=jquery&logoColor=white
[JQuery-url]: https://jquery.com 
[Java.com]: https://img.shields.io/badge/Java-ED8B00?style=for-the-badge&logo=java&logoColor=white
[Java-url]: https://www.java.com
[Spring.io]: https://img.shields.io/badge/Spring-6DB33F?style=for-the-badge&logo=spring&logoColor=white
[Spring-url]: https://www.spring.io
[SpringSecurity.io]: https://img.shields.io/badge/Spring_Security-6DB33F?style=for-the-badge&logo=Spring-Security&logoColor=white
[Docker-url]: https://www.docker.com
[Docker.com]: https://img.shields.io/badge/docker-%230db7ed.svg?style=for-the-badge&logo=docker&logoColor=white
[Keycloak-url]: https://www.keycloak.org/
[Keycloak.org]: https://www.keycloak.org/resources/images/keycloak_logo_200px.svg