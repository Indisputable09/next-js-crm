"use client";

import React from "react";

import { Modal, ModalProps } from "@/components/Modal";

import { PromotionForm } from "../../Forms/PromotionForm";

export interface PromotionFormModal extends ModalProps {
    companyId: string;
}

export const PromotionFormModal = ({ companyId, onClose, ...rest }: PromotionFormModal) => {
    return (
        <Modal {...rest} onClose={onClose}>
            <PromotionForm companyId={companyId} onSubmit={() => onClose()} />
        </Modal>
    );
};
