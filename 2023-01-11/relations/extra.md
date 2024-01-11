---
---

---

## Com o mongoDB e mongoose

```javascript
const mongoose = require("mongoose");

// Definindo o esquema para Address
const addressSchema = new mongoose.Schema({
  street: String,
  city: String,
  zipCode: String,
});

// Definindo o esquema para Payment
const paymentSchema = new mongoose.Schema({
  cardNumber: String,
  expiryDate: String,
  cvv: String,
});

// Definindo o esquema para PersonalData
const personalDataSchema = new mongoose.Schema({
  firstName: String,
  lastName: String,
  birthdate: String,
});

// Definindo o esquema para User
const userSchema = new mongoose.Schema({
  username: String,
  email: String,
  address: { type: mongoose.Schema.Types.ObjectId, ref: "Address" },
  payment: { type: mongoose.Schema.Types.ObjectId, ref: "Payment" },
  personalData: { type: mongoose.Schema.Types.ObjectId, ref: "PersonalData" },
});

// Criando os modelos Address, Payment e PersonalData
const Address = mongoose.model("Address", addressSchema);
const Payment = mongoose.model("Payment", paymentSchema);
const PersonalData = mongoose.model("PersonalData", personalDataSchema);

// Criando o modelo User usando o esquema
const User = mongoose.model("User", userSchema);

// Criando instâncias das entidades Address, Payment e PersonalData
const exampleAddress = new Address({
  street: "Rua Principal",
  city: "Cidade A",
  zipCode: "12345",
});

const examplePayment = new Payment({
  cardNumber: "**** **** **** 1234",
  expiryDate: "12/25",
  cvv: "123",
});

const examplePersonalData = new PersonalData({
  firstName: "João",
  lastName: "Silva",
  birthdate: "01/01/1990",
});

// Salvando as entidades no MongoDB
Promise.all([
  exampleAddress.save(),
  examplePayment.save(),
  examplePersonalData.save(),
])
  .then(([address, payment, personalData]) => {
    // Atualizando o exemplo do User com as referências corretas
    const exampleUser = new User({
      username: "usuario123",
      email: "usuario123@email.com",
      address: address._id,
      payment: payment._id,
      personalData: personalData._id,
    });

    // Salvando o documento User no MongoDB
    return exampleUser.save();
  })
  .then(() => console.log("Documento User salvo com sucesso!"))
  .catch((err) => console.error("Erro ao salvar documento User:", err));
```
