import { Address, Relationship } from "./common";

export interface BatchRelease {
    /**
     * Type of the batchRelease resource. The value is always batchRelease.
     */
    type: "batchRelease"

    /* 
     * Identifier of the batchRelease resource.
     */
    id: string

    /**
    * JSON object representing the transaction data.
    */
    attributes: {
        /**
         * The amount (in cents) to move from the batch account to the receiver account.
         */
        amount: number

        /**
         * Description of the payment.
         */
        description: string

        /**
         * Name of the sender, before combining the payments.
         */
        senderName: string

        /**
         * Address of the sender.
         */
        senderAddress: Address

        /**
         * Unique identifier to monitor for similar sending accounts, could be the BIN + last four digits of the card number OR a unique identifier generated by you for the sender.
         */
        senderAccountNumber: string
    }

    /**
     * Describes relationships
     */
    relationships: {
        /**
         * The batch account to release the funds from.
         */
        batchAccount: Relationship

        /**
         * The receiver account to release the funds to.
         */
        receiver: Relationship
    }
}
