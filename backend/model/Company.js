const mongoose = require("mongoose");
const { Schema } = mongoose;

const companySchema = new Schema(
  {
    name: { type: String, required: true },
    field: { type: String, required: true },
    scheduled: { type: String, required: true },
    ctc: { type: String, required: true },
    // attachments: { type: [String], default: {} },
    description: { type: String, required: true },
    type: { type: String, required: true },
    url: { type: String, default: "" },
    cgpa: { type: Number, required: true },
    ten: { type: Number, required: true },
    twelve: { type: Number, required: true },
    backlogs: { type: Number, required: true },
    vacancy: { type: String, default: "Unknown" },
    deleted: { type: Boolean, default: false },
  },
  { timestamps: true }
);

const virtual = companySchema.virtual("id");
virtual.get(function () {
  return this._id;
});
companySchema.set("toJSON", {
  virtuals: true,
  versionKey: false,
  transform: function (doc, ret) {
    delete ret._id;
  },
});

exports.Company = mongoose.model("Company", companySchema);
