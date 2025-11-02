"use client";

import React from "react";

import { CompanyForm, CompanyFormProps } from "@/app/shared/Forms/CompanyForm";
import { Modal, ModalProps } from "@/components/Modal";

export interface CompanyFormModalProps extends ModalProps {
    onSubmit: CompanyFormProps["onSubmit"];
}

export const CompanyFormModal = ({ onClose, ...rest }: ModalProps) => {
    return (
        <Modal {...rest} onClose={onClose}>
            <CompanyForm onSubmit={() => onClose()} />
        </Modal>
    );
};
